import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <p>
                This is just a sample request from the database, now you can
                start working on your specific project. Good luck !
            </p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.id}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
