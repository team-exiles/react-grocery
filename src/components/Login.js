import { requestLogin } from "./Requests";
import * as React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { Register } from "./Register";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const location = useLocation();
  const [snackBar, setSnackBar] = useState(location.state?.openSnackBar);
  const navigate = useNavigate("");

  const handleSubmit = (event) => {
    event.preventDefault();
    requestLogin(username, password).then((res) => {
      const token = res.data.auth_token;
      setUser(token, username);
      navigate("/Homepage");
    });
  };

  const handleClose = () => {
    setSnackBar(false);
  };

  return (
    <section className="login-page">
      <Snackbar
        open={snackBar}
        onClose={() => setSnackBar(false)}
        autoHideDuration={3000}
        message="Registration Successful"
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Registration Successful
        </Alert>
      </Snackbar>
      <CssVarsProvider>
        {register === false ? (
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
                name="username"
                type="text"
                placeholder="Username"
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
              Log in
            </Button>

            <Typography
              endDecorator={<Link to="/sign-up">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Don't have an account?
            </Typography>
          </Sheet>
        ) : (
          setRegister === <Register />
        )}
      </CssVarsProvider>
    </section>
  );
};
