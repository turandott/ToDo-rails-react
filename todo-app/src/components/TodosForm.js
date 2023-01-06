import React, {useState} from "react";
import TodosContainer from "./TodosContainer";
import ReactDOM from "react-dom/client";

export default function Form(props){
    const [inputs, setInputs]=useState({});


    const handleChange=(event)=>{
        const name = event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]: value}))
    }
    const handleSubmit=(event,props)=>{
        event.preventDefault();
        props=inputs
        console.log(props)

        alert(`${inputs.title} task was created`)

    }
    return(
        <form onSubmit={handleSubmit}>
            <label>enter the title:
            <input type="text"
                   name="title"
                   value={inputs.title||""}
                   // onChange={ (e)=>setTitle(e.target.value)}
                   onChange={handleChange}
            />
            </label>

            <label>Enter task description:
                <input
                type="text"
                name="description"
                value={inputs.description||""}
                onChange={handleChange}
                />
            </label>
            <select name="status" onChange={handleChange}>
                <option value="draft">Draft</option>
                <option value="active">Active</option>
                <option value="done">Done</option>
            </select>
            <input type="submit"/>
        </form>
    )
}