import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./components/Button";
import {log} from "util";


type ShowType = {
    userId: number
    id: number,
    title: string
    completed: boolean
}

function App() {
    const [show, setShow] = useState<ShowType[]>([])

    const showUp = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setShow(json))
    }
    const clean = () => {
        setShow([])
    }

    return (
        <div className="App">
            <Button name={'Show me'} callback={showUp}/>
            <Button name={'Clean'} callback={clean}/>
            <ul style={{listStyleType: 'none'}}>
                {show.map(el=>{
                    return <li key={el.id}>
                        <span>{el.id}</span>
                        <span>{el.title}</span>
                        <input type={'checkbox'} checked={el.completed}/>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default App;
