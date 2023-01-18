import React, {Component, useEffect, useState} from 'react';
import uuid from "react-uuid";
import Sidebar from "./Sidebar";
import Main from "./Main";
import axios from 'axios';

const url = "/api/v1/todos";

function Todos() {
    const [notes, setNotes]=useState([]);
    const [activeNote, setActiveNote]=useState(false);

    useEffect(() => {
        getNotes();
    }, []);

    function getNotes() {
        axios.get(url)//возвращает промис
            .then((response) => {
                setNotes(response.data)
                console.log(response.data)
            })
    }

    function onDeleteNote(id, title) {
        console.log(id)
        axios.delete(`${url}/${id}`)
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
            lastModified:Date.now(),
        }
        try {
            console.log(`final data ${newNote}`)
            const response = await axios.post(url, newNote);
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
        axios.put(`${url}/${activeNote}`, updatedNote)
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