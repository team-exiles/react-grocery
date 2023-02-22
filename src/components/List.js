import { useState } from "react";
import { Link } from 'react-router-dom';
import { ListItems } from "./ListItems";

export const CreateList = () => {
  const [list, setList] = useState("");
  const [title, setTitle] = useState("Title..");

  return (
    <div>
      <h1>Create List</h1>
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
      <button><Link to="/">Home Page</Link></button>
      {/* <ListItems /> */}
    </div>
  );
}

function TextInput(props) {
  const [textInputField, setTextInputField] = useState("Input text here!");
  const [displayAlign, setDisplayAlign] = useState("");
  const [displayFont, setDisplayFont] = useState("");

  const handleText = (e) => {
    e.preventDefault();
    setTextInputField(e.target.value);
    props.setFrontText(e.target.value);
  };

  const handleAlignment = (e) => {
    setDisplayAlign(e.target.value);
    props.setTextAlign(e.target.value);
  };

  const handleFont = (e) => {
    setDisplayFont(e.target.value);
    props.setTextFont(e.target.value);
  };

  return (
    <div className="text-customizer">
      <div className="front-input">
        <input onChange={handleText} value={textInputField} />
      </div>
    </div>
  );
}

export default CreateList;
