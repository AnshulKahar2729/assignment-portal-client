import React,{useEffect, useState} from 'react'

const UploadPage = () => {
    const [file, setFile] = useState(null);
    const [displayFile, setDisplayFile] = useState(null);
    const [title,setTitle] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);

    try {
      const response = await fetch(
        "http://localhost:4000/api/assignment/?role=teacher",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setDisplayFile(data.URL);

      console.log(data.URL)
      console.log('title : ',title)
      
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  
  


  function handleUploadClick () {
    console.log("Upload Clicked");
  }


  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input type="file" name="file" onChange={handleFileChange} />
        <input type="text" placeholder='Assignment Title' name="file" onChange={(e) => {setTitle(e.target.value)}} />
        <button className='upload' onClick={handleUploadClick} type="submit">Upload</button>
      </form>

      {displayFile && <a target='_blank' href={displayFile}> DOWNLOAD FILE </a>}
      {/* <div className='w-full justify-center flex'><button className='w-fit' value={false} onClick={handleBackBtn}>Back</button></div> */}
    </div>
  );
  
}

export default UploadPage