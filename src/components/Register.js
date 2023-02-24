import { useState } from 'react';
import { requestRegisterUser } from './Requests';

export const Register = ({setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault() 
        requestRegisterUser(username, password)
        .then((res) => setUser(username, res.data.auth_token)
    )}

    return (
        <div>
            <form className="register">
            <h2>Please register McLovin so he can make his scrumptious salad.</h2>
            <div className="new-username">
                <input className="input" type="text" placeholder=" Username:"
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="new-password">
            <input className="input" type="password" placeholder=" Password:"
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}><strong>Register</strong></button>
            </form>
        </div>

    )
}