import React from "react";
import "./login.css";
import Home from "./Home";
function Login() {
    function validateForm() {
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;
        if (username === "" || password === "") {
            alert("Please fill in all fields");
            return false;
        }
            if (username === "admin" && password === "password") {
                alert("Login successful");

                return true;
            } else {
                alert("Invalid username or password");
                return false;
            }
    }
    return (
        <div>
            <h1>Login</h1>
            <div classname = "lf">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit" onClick={validateForm}>
                    Login
                </button>
                
            </div>
        </div>
    );
}
export default Login;