import axios from "axios";
import { useState } from "react";

export const Jwt = () => {

    const [token, setToken] = useState("");
    const handleJWT = async () => {
        try {
            const response = await axios.get("http://localhost:8000/auth/create-token");
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            console.log(error)
        }
    }

    const verifyToken = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return window.alert("No token found");
            const response = await axios.get("http://localhost:8000/auth/verify-token", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return window.alert(response.data.message + " & Session expires in " + response.data.session_expires_in + " seconds");
        } catch (err) {
            console.log(err)
        }
    }

    return <div>
        <h1>JWT</h1>
        <p>JSON Web Token</p>
        <button onClick={handleJWT}>Create and store a JWT</button>
        <p style={{
            wordBreak: "break-all"
        }}>Generated Token: {typeof token === "string" ? token : "No token"}</p>
        <button onClick={verifyToken}>Verify</button>
    </div>
}