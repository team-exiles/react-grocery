import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useState } from "react";

export default function DeleteItem({ token, deleteItem, itemID }) {
  const handleDelete = () => {
    axios({
      method: "DELETE",
      url: `https://safe-plains-62725.herokuapp.com/items/${itemID}/`,
      headers: {
        authorization: `token ${token}`,
      },
    }).then((res) => {
      deleteItem(itemID);
    });
  };

  return (
    <div>
      <IconButton onClick={handleDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
