import { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

/* export const Register = ({setUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault() 
        requestRegisterUser(email, password)
        .then((res) => setUser(email, res.data.auth_token)
    )}

    return (
        <div>
            <form className="register">
            <h2>Please register McLovin so he can make his scrumptious salad.</h2>
            <div className="new-email">
                <input className="input" type="email" placeholder=" E-mail:"
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="new-password">
            <input className="input" type="password" placeholder=" Password:"
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}><strong>Register</strong></button>
            </form>
            <button><Link to="/Login">Return to Login</Link></button>
        </div>

    )
} */ 

export const Register = ({setUser}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit=(e) => {
        e.preventDefault()
        axios

        .post('https://safe-plains-62725.herokuapp.com/auth/users/',{username, password})
        
       /* .then((res) => {})
        
        .then(() => axios.post('https://social-cards-wg2j.onrender.com/auth/token/login',{username, password})) */ 
        
        .then((res) => setUser(username, res.data.auth_token))} 

        
    return (
        <div>
            <form className="register">
            <h3>Register</h3>
                <div className="userfield">
                    <input className="input" type="text" placeholder="username" 
                    onChange={(e) => setUsername(e.target.value)}/> 
                </div>
                <div className="passwordfield">
                    <input className="input" type="password" placeholder="password" 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleSubmit}>Register</button>
            </form>
            <button><Link to="/Login">Close Window</Link></button>
        </div>
)}