import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'
import Form from "./TodosForm";
import update from 'immutability-helper'

const url = "/api/v1/todos"
export default function TodosContainer() {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
       getTodos() ;
    }, []);
function getTodos(){
    axios.get(url)//возвращает промис
        .then((response) => {
            setTodos(response.data)
            console.log(response.data)
        })
}
function deleteTodo(id,title){
    console.log(id)
    axios.delete(`${url}/${id}`)
        .then(()=>{
            alert(`Post ${title} deleted`);
            //props.stopPropagation()//?
            setTodos(oldTodos=>oldTodos.filter(todo=>todo.id!==id))
        })
}
function createTodo(){
    axios.post(url, {
        title:"",
        description:"",
        status:""
    })
        .then((response)=>{setTodos(
            [response.data, ...todos]
        )})
}
function updateTodo(todo){
    axios.put(`${url}/${todo.id}`,
        {title:"", description:""})
        .then((response)=>{
            setTodos(response.data)
        })
}
    return (
        <div>
            <Form/>
            <ul>
                <button className="delete-btn" onClick={()=>createTodo()} >add</button>

                {todos.map(todo =>
                    <div className="taskList" key={todo.id}>
                    <div className="todo" >
                        <li className="task" >{todo.title} </li>
                        <p className="task-text" >{todo.description}</p>
                    </div>
                    <button className="delete-btn" onClick={()=>deleteTodo(todo.id, todo.title)} >delete</button>
                    </div>
                )}
            </ul>
        </div>
    )
}

