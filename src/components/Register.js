import { useState } from 'react';
import axios from "axios";
import Link from '@mui/joy/Link';
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

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
                    <div>
                        <Typography level="h4" component="h1">
                        <b>Registration</b>
                        </Typography>
                        <Typography level="body2">Create a Username and Password</Typography>
                    </div>

                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input
                            // html input attribute
                            name="email"
                            type="email"
                            placeholder="johndoe@email.com"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        </FormControl>
                        <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </FormControl>
                        <Button
                        variant="soft"
                         onClick={handleSubmit} sx={{ mt: 2 /* margin top */ }}>
  Register
</Button>
                        <Button
                        variant="soft"
                        ><Link to="/Login">Close Window</Link>
                        </Button>
                </Sheet>
            </CssVarsProvider>
        </div>

    )
}