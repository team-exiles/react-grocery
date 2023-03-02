import "./App.css";
import { Routes, Route } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import { Login } from "./components/Login";
import { Homepage } from "./components/Homepage";
import { EditList } from "./components/List";
import { Register } from "./components/Register";
import { Archive } from "./components/Archives";

function App() {
  const [token, setToken] = useLocalStorageState("token", null);
  const [username, setUsername] = useLocalStorageState("username", "");

  const setUser = (token, username) => {
    setToken(token);
    setUsername(username);
  };

  const loggedIn = (token, username);

  return (
    <div className="App">
      {!loggedIn ? (
        <div>
          {/* <Login setUser={setUser} /> */}
          <Routes>
            <Route path="/Login" element={<Login setUser={setUser} />} />
            <Route path="/sign-up" element={<Register setUser={setUser} />} />
            <Route path="/" element={<Login setUser={setUser} />} />
          </Routes>
        </div>
      ) : (
        <>
          <Routes>
            <Route
              path="/Homepage"
              element={
                <Homepage setUser={setUser} username={username} token={token} />
              }
            />
            <Route
              path="/"
              element={
                <Homepage setUser={setUser} username={username} token={token} />
              }
            />
            <Route path="/Create" element={<EditList token={token} />} />
            <Route path="/Login" element={<Login setUser={setUser} />} />
            <Route path="/Archives" element={<Archive setUser={setUser} />} />
            <Route path="/sign-up" element={<Register setUser={setUser} />} />
            <Route
              path="/lists/edit/:listID/"
              element={<EditList token={token} />}
            />
          </Routes>
        </>
      )}
    </div>
  );
}
export default App;
