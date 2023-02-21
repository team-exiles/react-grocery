import { useState } from "react";
import ListItems from "./ListItems"

export const Lists = () => {
  const [list, setList] = useState("");

  return (
    <div>
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
      <ListItems/>
    </div>
  );
};
