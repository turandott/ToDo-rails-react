import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import App from "../App";
import User from "./User";
import Logout from "./Logout";
const Navbar=({currUser, setCurrUser})=>{
return (<div className="navbar">
        <div className="routing">
        <li className="nav-links">
            <Link to="/">Home</Link>
        </li>
        <li className="nav-links">
            <Link to="/todos">Todos</Link>
        </li>
        <li className="nav-links">
            <Link to="/profile">Profile</Link>
        </li>
        </div>
        <li className="nav-links">
            <Logout setCurrUser={setCurrUser}/>
        </li>

        {/*<BrowserRouter>*/}
        {/*    <Routes>*/}
        {/*        <Route path="todos" element={<Todos/>}/>*/}
        {/*    </Routes>*/}
        {/*</BrowserRouter>*/}
    </div>
)
}
export default Navbar