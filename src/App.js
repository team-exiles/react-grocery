import "./App.css";
import { Routes, Route } from "react-router-dom";
import useLocalStorageState from 'use-local-storage-state';
import { Login } from "./components/Login";
import { Homepage } from "./components/Homepage";
import { CreateList } from "./components/List";

function App() {
  const [token, setToken] = useLocalStorageState("token", null)
  const [username, setUsername] = useLocalStorageState("username", '')

  const setUser = (token, username) => {
    setToken(token)
    setUsername(username)
  }

  const loggedIn = token

  return (
    <div className="App">
      {!loggedIn ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Homepage token={token} />} />
            <Route path="/Create" element={<CreateList token={token} />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </>
      )}
    </div>
  );
}
export default App;
