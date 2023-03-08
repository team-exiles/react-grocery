import { useState } from "react";
import * as React from "react";
import axios from "axios";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router";

export const Register = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");


  const handleSubmit = (e) => {
    axios
      .post("https://safe-plains-62725.herokuapp.com/auth/users/", {
        username,
        password,
      })
      .then((res) => {
        setUser(username, res.data.auth_token);
        navigate("/Login", {
          state: {
            openSnackBar: true,
          },
        });
      });
  };

  return (
    <div>
      <CssVarsProvider>
        <Sheet
          sx={{
            width: 300,
            mx: "auto", 
            my: 4, 
            py: 3, 
            px: 2, 
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}>

          <div>
            <Typography level="h4" component="h1">
              <b>Registration</b>
            </Typography>
            <Typography level="body2">
              Create a Username and Password
            </Typography>
          </div>
  

          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              type="text"
              placeholder="johndoe"
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

          <Button onClick={handleSubmit} sx={{ mt: 2 }}>
            Register
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => {
              navigate(-1);
            }}
          >
            Back
          </Button>
        </Sheet>
      </CssVarsProvider>
    </div>
  );
};
