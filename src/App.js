import React , {useState, useEffect}from 'react'
import axios from 'axios'
import './App.css'



const App = () => {
    const [newAdvice, setNewAdvice] = useState('')
    useEffect(
        ()=> {
            fetchAdvices()
        },[]
    )

    const fetchAdvices = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then(response => {
            let { advice } = response.data.slip
            setNewAdvice(advice)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <div className='app'>
            <div className='card'>
                <h1 className='header'>
                    {newAdvice}
                </h1>
                <button className='button' onClick={fetchAdvices}>
                    <span>
                        GIVE ME ADVICE
                    </span>
                </button>
            </div>
            
        </div>
    )
}

export default App
