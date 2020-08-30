import React , {useState, useEffect}from 'react'
import axios from 'axios'
3
import './App.css '

const App = () => {
    const [advice, setAdvice] = useState('')
    useEffect(
        ()=> {
            axios.get()
        },[]
    )
    const fetchAdvices = () => {
        axios.get()
    }
    return (
        <div>
            <h1> Hello world</h1>
        </div>
    )
}

export default App
