import { requestLogin } from "./Requests";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';



export const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (event) => {
    event.preventDefault();
    requestLogin(username, password).then((res) => {
      const token = res.data.auth_token;
      setUser(token, username);
      navigate("/Homepage");
    });
  };

  return (
    <CssVarsProvider>
      <Sheet sx={{
    width: 600,
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
      <b>Welcome!</b>
    </Typography>
    <Typography level="body2">Sign in to continue.</Typography>
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
<Button onClick={handleSubmit} sx={{ mt: 2 /* margin top */ }}>
  Log in
</Button>
<Typography
  endDecorator={<Link href="/sign-up">Sign up</Link>}
  fontSize="sm"
  sx={{ alignSelf: 'center' }}
>
  Don't have an account?
</Typography>

</Sheet>
        {/* <button onClick={handleSubmit} className="login-button" type="submit">
          <strong>Log In</strong>
        </button>
        <br />
        <button>
          <Link to="/Register">New User? See Registration</Link>
        </button> */}
        </CssVarsProvider>
  );
};
