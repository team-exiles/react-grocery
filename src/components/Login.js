import { requestLogin } from "./Requests";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
    <>
      <div className="login-field">
        <h1>Log In</h1>
        <div className="username">
          <input
            className="login-input"
            type="login-input"
            placeholder=" Username:"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="password">
          <input
            className="input"
            type="password"
            placeholder="  Password:"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className="login-button" type="submit">
          <strong>Log In</strong>
        </button>
        <br />
        <button>
          <Link to="/Register">New User? See Registration</Link>
        </button>
      </div>
    </>
  );
};
