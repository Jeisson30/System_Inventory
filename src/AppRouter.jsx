import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact Component={Login} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}
export default AppRouter;