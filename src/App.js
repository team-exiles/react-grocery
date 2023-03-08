import "./App.css";
import { Routes, Route } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import { Login } from "./components/Login";
import { Homepage } from "./components/Homepage";
import { EditList } from "./components/List";
import { Register } from "./components/Register";
import { Archive } from "./components/Archives";
import Shopping from "./components/Shopping";
import InviteLogin from "./components/Invitation";
import { QueryClientProvider, QueryClient } from "react-query";
//import { ReactQueryDevtools } from "react-query/devtools";
import { createTheme } from "@mui/material/styles";

const queryClient = new QueryClient();

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#406975",
//     },
//   },
// });

function App() {
  const [token, setToken] = useLocalStorageState("token", null);
  const [username, setUsername] = useLocalStorageState("username", "");

  const setUser = (token, username) => {
    setToken(token);
    setUsername(username);
  };

  const loggedIn = (token, username);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {!token ? (
          <div>
            <Routes>
              <Route path="/Login" element={<Login setUser={setUser} />} />
              <Route path="/Homepage" element={<Login setUser={setUser} />} />
              <Route path="/sign-up" element={<Register setUser={setUser} />} />
              <Route path="/" element={<Login setUser={setUser} />} />
              <Route
                path="/invite/:listID/:inviteID/"
                element={<InviteLogin token={token} setToken={setToken} />}
              />
            </Routes>
          </div>
        ) : (
          <>
            <Routes>
              <Route
                path="/Homepage"
                element={
                  <Homepage
                    setUser={setUser}
                    username={username}
                    token={token}
                    setUsername={setUsername}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <Homepage
                    setUser={setUser}
                    username={username}
                    token={token}
                    setUsername={setUsername}
                  />
                }
              />
              <Route
                path="/invite/:listID/:inviteID/"
                element={<InviteLogin token={token} setToken={setToken} />}
              />
              {/* <Route path="/Create" element={<EditList token={token} />} /> */}
              <Route path="/Create" element={<EditList />} />
              <Route path="/Login" element={<Login setUser={setUser} />} />
              <Route path="/Archives" element={<Archive setUser={setUser} />} />
              <Route path="/sign-up" element={<Register setUser={setUser} />} />
              <Route
                path="/shopping/:listID/"
                element={<Shopping token={token} />}
              />
              <Route
                path="/lists/edit/:listID/"
                element={
                  <EditList
                    token={token}
                    setToken={setToken}
                    username={username}
                    setUsername={setUsername}
                  />
                }
              />
            </Routes>
          </>
        )}
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}
export default App;
