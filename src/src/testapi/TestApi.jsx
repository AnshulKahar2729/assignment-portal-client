import React, {useEffect, useState} from 'react'

// const BASE_URL = 'http://localhost:4000' 
// const BASE_URL = 'assignment-portal-server.vercel.app' 
const BASE_URL = 'https://assignment-portal-server.onrender.com'

const TestApi = () => {
    const [testData, setTestData] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/assignment`);
        const data = await response.json();
        setTestData(data);
        console.log(data);
      } catch (error) {
        console.error("Error getting data : ", error);
      }
    }
    fetchData();
  }
,[])
  return (
    <div>TestApi</div>
  )
}

export default TestApi