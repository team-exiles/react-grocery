import { useState } from "react";

export const ListItems = () => {
  const [itemEntry, setItemEntry] = useState("");

  return (
    <div>
      <h1>List</h1>
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
      <ListItems />
    </div>
  );
}

export default ListItems;
