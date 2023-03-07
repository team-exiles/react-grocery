import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import Box from '@mui/material/Box';
// import { useState } from "react";

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
      <Box component="span" 
            sx={{ p: 1,
              height: 20,
              width: 20,
            // border: '2px solid black',
            borderRadius: '8px',
            backgroundColor: '#cfd8dc'
            }}>
        <DeleteIcon sx={{color:'black'}} />
        </Box>
      </IconButton>
    </div>
  );
}
