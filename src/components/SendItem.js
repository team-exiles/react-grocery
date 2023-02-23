import { useState } from "react";

function SendItems() {
  const [item, setItem] = useState("");

  return (
    <div className="item-entry">
      <form className="send-iteminput">
        <label htmlFor="messageInput" hidden>
          Enter Item
        </label>
        <input
          id="itemInput"
          name="itemInput"
          type="text"
          className="form-input__inputmpv "
          placeholder="Add an item.."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SendItems;
