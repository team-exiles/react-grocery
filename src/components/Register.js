import { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";

export const Register = ({ setUser }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        axios

            .post('https://safe-plains-62725.herokuapp.com/auth/users/', { username, password })
            .then((res) => setUser(username, res.data.auth_token))
    }


    return (
        <div>
            <CssVarsProvider>
                <Sheet sx={{
                    width: 300,
                    mx: 'auto', // margin left & right
                    my: 4, // margin top & botom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                }}
                >
                    <form className="register">
                        <h3 className="regi-name">Register</h3>
                        <div className="userfield">
                            <input className="input" type="text" placeholder="username"
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <br />
                        <div className="passwordfield">
                            <input className="input" type="password" placeholder="password"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="regi-butt" onClick={handleSubmit}>Register</button>
                        <button className="regi-close"><Link to="/Login">Close Window</Link></button>
                    </form>
                </Sheet>
            </CssVarsProvider>
        </div>

    )
}