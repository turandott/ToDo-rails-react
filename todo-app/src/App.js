import './App.css';
// import TasksContainer from './components/TasksContainer';
import React,{ Component } from 'react';
import TodosContainer from "./components/TodosContainer";

class App extends Component {
    render () {
        return(
            <div className="container">
                <div className="header">
                    <h1>ToDo list</h1>
                </div>
                <TodosContainer/>
            </div>
        );
    }
}

export default App;