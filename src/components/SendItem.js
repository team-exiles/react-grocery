import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";

export function SendItems({ items, setItems, token, listID, scroll }) {
  const [textInput, setTextInput] = useState("");
  const [addedItem, setAddedItem] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disableState, setDisableState] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addedItem.trim() === "") {
    }
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
        setTextInput("");
        setAddedItem("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
      });
  };

  const handleText = (e) => {
    e.preventDefault();

    setTextInput(e.target.value);
    setAddedItem(e.target.value);
  };

  return (
    <div>
      <div className="item-entry">
        <form className="send-item-input">
          <label htmlFor="messageInput" hidden>
            Enter Item
          </label>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <TextField
              size="small"
              required
              id="list"
              label="Add Item"
              onChange={handleText}
              value={textInput}
              autoFocus
              autoComplete="off"
            />
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              Add
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}
