import { Link } from "react-router-dom";
import { useState } from "react";

export const CreateList = () => {
  const [list, setList] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div>
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

function TextInput({ setTitle }) {
  const [textInputField, setTextInputField] = useState("");

  const handleText = (e) => {
    e.preventDefault();
    setTextInputField(e.target.value);
    setTitle(e.target.value);
  };

  return (
    <div className="text-customizer">
      <div className="front-input">
        <input
          onChange={handleText}
          value={textInputField}
          placeholder="Enter Title..."
        />
      </div>
    </div>
  );
}
