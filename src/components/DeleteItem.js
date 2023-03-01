import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

export default function DeleteItem({ token, itemID }) {
  const handleDelete = () => {
    axios({
      method: "DELETE",
      url: `https://safe-plains-62725.herokuapp.com/items/${itemID}/`,
      headers: {
        authorization: `token ${token}`,
      },
    });
  };

  return (
    <div>
      <IconButton size="small" color="primary">
        <DeleteIcon onClick={handleDelete} />
      </IconButton>
    </div>
  );
}
