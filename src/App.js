import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Homepage } from "./components/Homepage";
import { CreateList } from "./components/List";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Create" element={<CreateList />} />
          </Routes>
        </>
      )}
    </div>
  );
}
export default App;
