import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DeleteItem from "./DeleteItem";
import FlagIcon from "@mui/icons-material/Flag";
import { IconButton } from "@mui/material";

export function ShowListItems({ items, setItems, token, listID }) {
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

  const handleMissing = (flag, itemID) => {
    const newFlag = !flag;
    axios
      .patch(
        `https://safe-plains-62725.herokuapp.com/items/${itemID}/`,
        { missing: newFlag },
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
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

  return (
    <List
    sx={{
      width: '100%',
      maxWidth: 360,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 560,
    }}>
      {items.map((item) => (
        <div key={item.id}>
          <Divider />
          <ListItem
            sx={{ backgroundColor: item.missing ? "rgb(214, 155, 149)" : null }}
          >
            <Checkbox
              checked={item.check_box}
              onChange={() => handleClick(item)}
            />

            <ListItemText primary={item.item} />

            <IconButton onClick={(e) => handleMissing(item.missing, item.id)}>
              <FlagIcon />
            </IconButton>

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
