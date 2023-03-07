import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axios from "axios";
import { useNavigate } from "react-router";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

const style = {
  margin: 0,
  top: "auto",
  right: 35,
  bottom: 35,
  left: "auto",
  position: "fixed",
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateList({ token }) {
  const [title, setTitle] = React.useState("Untitled");
  let listID = "";
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    const url = "https://safe-plains-62725.herokuapp.com/lists/me/";
    axios
      .post(
        url,
        { title: `${title}` },
        { headers: { Authorization: `token ${token}` } }
      )
      .then((res) => {
        listID = res.data.id;
        navigate(`/lists/edit/${listID}/`, {
          state: {
            title: title,
            id: listID,
            token: token,
          },
        });
        setTitle("Untitled");
      });
  };

  return (
    <div>
      <Fab
        sx={style}
        // sx={{ position: "absolute", bottom: 40, right: 40 }}
        variant="extended"
        color="primary"
        onClick={handleClickOpen}
        size="large"
      >
        <AddIcon sx={{ mr: 1 }} />
        <strong>New List</strong>
      </Fab>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Create a new list?</DialogTitle>

        <DialogContent>
          <TextField
            sx={{ mt: 1 }}
            required
            id="list"
            label="New List Title"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create list</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
