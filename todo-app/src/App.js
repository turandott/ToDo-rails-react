import './note.css'
import React, {Component, Profiler, useEffect, useState} from 'react';
import uuid from "react-uuid";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import axios from 'axios';
import User from './components/User';
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route, Link, BrowserRouter as Router} from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Login from "./components/Login";
const url = "/api/v1/todos";


function App() {

    const [currUser, setCurrUser]=useState(null)
    const [show, setShow]=useState(true)
if(!currUser){
    return<User currUser={currUser} setCurrUser={setCurrUser}/>
}



    return (
        <div className='App'>
            <div className='main-body'>

            <Router>
            <Navbar  currUser={currUser} setCurrUser={setCurrUser} />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/todos' element={<Todos/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
            </div>
        </div>
    );
}

export default App;