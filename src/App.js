import "./App.css";
import { useState } from "react";
import { Login } from "./Components/Login";
import CreateList from "./Components/List";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      {!user ? <Login setUser={setUser} /> : <CreateList />}
    </div>
  );
}

export default App;
