import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import PrivateText from "./PrivateText";
import React, { useState,useEffect } from "react";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Main from "./Main";
import axios from "axios";
import uuid from "react-uuid";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Todos from "./Todos";

const url = "/api/v1/todos";

const User = ({currUser, setCurrUser}) => {

    const [show, setShow]=useState(true)
    if(currUser)
        return (
            <div>

                Hello {currUser.email}
                <PrivateText currUser={currUser}/>
                <Logout setCurrUser={setCurrUser}/>
                {/*<Sidebar notes={notes}*/}
                {/*         onAddNote={onAddNote}*/}
                {/*         onDeleteNote={onDeleteNote}*/}
                {/*         activeNote={activeNote}*/}
                {/*         setActiveNote={setActiveNote}*/}
                {/*/>*/}
                {/*<Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>*/}

            </div>

        )
    return (
        <div>
            { show?
                <Login setCurrUser={setCurrUser} setShow={setShow}/>
                :
                <Signup setCurrUser={setCurrUser}  setShow={setShow} />
            }
        </div>
    )
}
export default User