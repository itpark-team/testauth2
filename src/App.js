import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main_page/MainPage";
import NotFoundPage from "./components/not_found_page/NotFoundPage";
import SecureLayout from "./components/secure/SecureLayout";
import UserPage from "./components/secure/UserPage";
import AuthPage from "./components/auth_page/AuthPage";
import RegisterPage from "./components/register_page/RegisterPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>

            <Route path="/secure" element={<SecureLayout/>}>
                <Route path="user" element={<UserPage/>}/>
            </Route>

        </Routes>
    );
};

export default App;