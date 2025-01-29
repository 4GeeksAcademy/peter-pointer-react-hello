import React, { useState } from "react";

export const TodoList = () => {
    const [newTask, setNewTask] = useState("");
    const [todos, setTodos] = useState([])

    const handleDelete = (task) => {
        setTodos(todos.filter((item) => task !== item))
    }

    const handleTask = (event) => {
        setNewTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // regla de oro del submit
        // verificar que tengo algo distinto a vacío o espacios en blanco
        if (newTask.trim() != "") {
            setTodos([...todos, newTask])
        }
        // agregarlo al array todos
        setNewTask("")
    }

    return (
        <div className="container mt-5 fw-bold">
            <h1 className="text-center">Todo List with React</h1>
            {/* Formulario */}
            <h2 className="text-center">Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="Add a new task"
                    value={newTask} onChange={handleTask} />
            </form>

            <h2 className="text-center">ToDo List</h2>
            {/* ul y el map para mostrar datos del array */}
            <ul className="list-group">
                {todos.map((iterator, index) =>
                    <li key={index} className="list-group-item d-flex justify-content-between hidden-icon">{iterator}
                        <span onClick={() => handleDelete(iterator)}>
                            <i className="fa fa-trash text-danger"></i>
                        </span>
                    </li>
                )}
                <li className="list-group-item list-group-item-secondary text-secondary text-end fw-bold">{todos.length} Tasks</li>
            </ul>
        </div>
    )
}