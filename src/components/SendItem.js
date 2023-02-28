import { useState, useEffect } from "react";
import axios from "axios";

export function SendItems({ items, setItems, token, listID }) {
  const [textInput, setTextInput] = useState("");
  const [addedItem, setAddedItem] = useState("");

  const handleSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    if (addedItem.trim() === "") {
      alert("Enter valid message");
      return;
    }
    // setItems([...items, addedItem]);
    axios
      .post(
        `https://safe-plains-62725.herokuapp.com/items/`,
        {
          list_for_items: `${listID}`,
          item: `${addedItem}`,
        },
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        setItems([...items, res.data]);
        // console.log(items);
      });

    setTextInput("");
    setAddedItem("");
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
          type="text"
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}
