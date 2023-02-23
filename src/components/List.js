import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { ListItems } from "./ListItems";
import { TextInput } from "./Homepage";

export const CreateList = () => {
  const [list, setList] = useState("");
  const [title, setTitle] = useState("Title..");
  return (
    <div>
      <button>
        <Link to="/">Home Page</Link>
      </button>
      <h1>{title}</h1>
      <form className="list-title">
        <label htmlFor="titleInput" hidden>
          Enter Title
        </label>
        <input
          id="titleInput"
          name="titleInput"
          type="text"
          className="form-input__input"
          placeholder="Enter Title..."
        />
        <button type="submit">Send</button>
      </form>
      <TextInput setTitle={setTitle} />
      {/* <ListItems /> */}
    </div>
  );
};