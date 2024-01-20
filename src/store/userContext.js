import React, { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            // get token from local storage
            const token = localStorage.getItem("token");
            console.log(token);

            try {
                const response = await fetch("https://assignment-portal-server.onrender.com/api/profile", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                console.log('data is hereeeee:', data);

                const role = data.studentId ? 'student' : 'teacher';
                const userWithRole = { ...data, role };

                setUser(userWithRole);
            } catch (error) {
                console.log(error);
            }
        };

        if (localStorage.getItem("token")) {
            getUser();
        }
        // getUser();
    }, []);



    return (<UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>)
}