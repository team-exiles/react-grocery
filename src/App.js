import "./App.css";
import { useState } from "react";
import { Login } from "./Components/Login";
import { List } from "./Components/List";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Components/Homepage";
import { CreateList } from "./Components/CreateList";
import twitter from "./img/twitter.png";
import facebook from "./img/facebook.png";
import google from "./img/google.png";

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
