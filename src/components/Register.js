import { useState } from "react";
import axios from "axios";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
//import IconButton from "@mui/material/IconButton";
//import { InputLabel } from "@mui/material";
//import InputAdornment from "@mui/material/InputAdornment";
//import Visibility from "@mui/icons-material/Visibility"; 
//import VisibilityOff from "@mui/icons-material/VisibilityOff"; 
import { useNavigate } from "react-router-dom";

export const Register = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  /* const [values, setValues] = useState({ password: "", showPassword: false }); */
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    axios
      .post("https://safe-plains-62725.herokuapp.com/auth/users/", {
        username,
        password,
      })
      .then((res) => {
        setUser(username, res.data.auth_token);
        navigate("/Login");
      });
  };

  /* const handleClickShowPassword = () => {
    setValues({...values, showPassword: values.showPassword});
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value }); 
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; */ 

  return (
    <div>
      <CssVarsProvider>
        <Sheet
          sx={{
            width: 300,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
        >
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
              // html input attribute
              name="email"
              type="email"
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

         {/*} <div>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              name="password"
              type={values.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              value={values.password}
              placeholder="password"
              endadornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
                }
            />
              </div> */}
          

          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              name="password2"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            variant="soft"
            onClick={handleSubmit}
            sx={{ mt: 2 /* margin top */ }}
          >
            Register
          </Button>
          <Button
            variant="soft"
            onClick={(e) => {
              navigate("/Login");
            }}
          >
            Back
            {/* <Link component={RouterLink} to="/Login">Close Window</Link> */}
          </Button>
        </Sheet>
      </CssVarsProvider>
    </div>
  );
};
