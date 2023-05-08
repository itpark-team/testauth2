import React, {useEffect, useState} from 'react';
import LocalStorageWorker from "../store/LocalStorageWorker";
import AuthApiWorker from "../api/AuthApiWorker";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {

    let localStorageWorker = new LocalStorageWorker();
    let authApiWorker = new AuthApiWorker();

    let navigate = useNavigate();

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    // useEffect(() => {
    //     localStorageWorker.saveToken("12345");
    // }, []);
    const auth = (e) => {
        e.preventDefault();

        let userCredentials = {
            "username": username,
            "password": password
        }

        authApiWorker.authenticateUser(userCredentials).then(
            response => {
                localStorageWorker.saveToken(response.data.token);
                navigate("/secure/user");
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Auth Page</h1>
            <form onSubmit={auth}>
                <div>username:
                    <input type="text" value={username}
                           onChange={event => setUsername(event.target.value)}/>
                </div>
                <div>password:
                    <input type="text" value={password}
                           onChange={event => setPassword(event.target.value)}/>
                </div>
                <input type="submit" value="authenticate"/>
            </form>
        </div>
    );
};

export default AuthPage;