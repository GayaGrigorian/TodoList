import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm";
import ListItem from "./components/ListItem";

export default function App () {
    const [todos, setTodos]= useState([]);
    const [value, setValue]= useState("");

    const onChange=(e)=> {
        setValue(e.target.value);
    }

    const onAddTask=(e)=> {
        const obj = {
            id: uuidv4(),
            title: value,
            isCompleated: false,
        };
        if (value.trim()) {
            setTodos(todos.concat(obj));
            setValue("");
        }
    }

   
        return (
            <>
                <TodoForm value={value} onChange={onChange} onAddTask={onAddTask} />
                <ListItem todos={todos} setTodos={setTodos} />
            </>
        );
    }
