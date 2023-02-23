import { useState, useEffect } from "react";

export function SendItems({ items, setItems, listTitle, setListTitle }) {
  const [textInput, setTextInput] = useState("");
  const [addedItem, setAddedItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, addedItem]);
    setTextInput("");
  };

  const handleText = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
    setAddedItem(e.target.value);
  };

  return (
    <div className="item-entry">
      <form className="send-item-input">
        <label htmlFor="messageInput" hidden>
          Enter Item
        </label>
        <input
          onChange={handleText}
          value={textInput}
          placeholder="Add an item.."
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}
