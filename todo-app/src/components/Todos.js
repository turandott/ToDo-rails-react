import React, {Component, useEffect, useState} from 'react';
import uuid from "react-uuid";
import Sidebar from "./Sidebar";
import Main from "./Main";
import axios from 'axios';

const url = "http://localhost:3000/api/v1/todos";

function Todos() {
    const [notes, setNotes]=useState([]);
    const [activeNote, setActiveNote]=useState(false);

    useEffect(() => {
        getNotes();
    }, []);


    const headers={
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `${localStorage.getItem('token')}`
        }

    function getNotes() {
        axios.get(url, {headers})//возвращает промис
            .then((response) => {
                setNotes(response.data)
                console.log(response.data)
            })
    }

    function onDeleteNote(id, title) {
        console.log(id)
        axios.delete(`${url}/${id}`, {headers})
            .then(() => {
                alert(`Post ${title} deleted`);
                //props.stopPropagation()//?
                setNotes(oldTodos => oldTodos.filter(todo => todo.id !== id))
            })
    }

    const onAddNote=async()=>{
        const newNote={
            id:uuid(),
            title: 'Untitled',
            description:'Empty',
            status:'active',
            created_at:Date.now(),
            // user_id:2,
        }
        try {
            console.log(`final data ${newNote}`)
            const response = await axios.post(url, newNote, {headers});
            const allNotes = [response.data, ...notes]
            setNotes(allNotes)
            alert(`${newNote.title} task was created`)
        } catch (err) {
            console.log(`Error ${err.message}`)
        }

    }


    const getActiveNote=()=>{
        return notes.find((note)=>note.id===activeNote)
    }

    const onUpdateNote=(updatedNote)=>{
        const updatedNotesArray=notes.map((note)=>{
            if (note.id === activeNote){
                console.log(updatedNote)
                return updatedNote
            }
            return note
        })
        axios.put(`${url}/${activeNote}`, updatedNote,{headers})
                    .then(response=>console.log(response))
                    //setNotes(updatedNotesArray))

        console.log(` final updated ${updatedNote.title}`)
        setNotes(updatedNotesArray)
    }
    return (
        <div>
            <div className="todo" >
            <Sidebar notes={notes}
                     onAddNote={onAddNote}
                     onDeleteNote={onDeleteNote}
                     activeNote={activeNote}
                     setActiveNote={setActiveNote}
            />
            <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
            </div>
        </div>
    )
}

export default Todos