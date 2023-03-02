import { useState } from "react";
import axios from "axios";
//import Button from "@mui/joy/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DeleteItem from "./DeleteItem";
import { roleElements } from "aria-query";

export function ShowListItems({ items, setItems, token, listID }) {
  const [state, setState] = useState({});

  const handleClick = (item) => {
    const newCheckBox = !item.check_box;
    axios
      .patch(
        `https://safe-plains-62725.herokuapp.com/items/${item.id}/`,
        {
          check_box: newCheckBox,
        },
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        //(items.find((id) => id.id === item.id));
        axios
          .get(`https://safe-plains-62725.herokuapp.com/lists/${listID}/`, {
            headers: {
              authorization: `token ${token}`,
            },
          })
          .then((res) => {
            setItems(res.data.listForItems);
          });
      });
  };

  const deleteItem = (itemID) => {
    const newItemArray = items.filter((item) => item.id !== itemID);
    setItems(newItemArray);
  };

  return (
    <List>
      {items.map((item) => (
        <div key={item.id}>
          <Divider />
          <ListItem>
            <Checkbox
              checked={item.check_box}
              onChange={() => handleClick(item)}
            />

            <ListItemText primary={item.item} />
            <DeleteItem
              token={token}
              deleteItem={deleteItem}
              itemID={item.id}
            />
          </ListItem>

          <Divider />
        </div>
      ))}
    </List>
  );
}

// return (
//   <Box sx={{ mx: 3, display: "flex" }}>
//     <FormGroup>
//       {items.map((item) => (
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={item.check_box}
//               onChange={() => handleClick(item)}
//             />
//           }
//           label={item.item}
//         />
//       ))}
//     </FormGroup>
//   </Box>
// );
