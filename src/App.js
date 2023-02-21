import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { List } from "./components/List";
import { Homepage } from "./components/Homepage";
import { CreateList } from "./components/CreateList";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h2>The NutBagz have Returned</h2>
        <h3>Until we have another name up, of course</h3>
      </header>
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
