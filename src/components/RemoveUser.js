import axios from "axios";
import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  IconButton,
  Snackbar,
} from "@mui/material/";
import { Typography } from "@mui/material/";
import MuiAlert from "@mui/material/Alert";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RemoveUser({
  listID,
  token,
  setHasGuests,
  numberShared,
  username,
  owner,
}) {
  const [open, setOpen] = React.useState(false);
  const [openBar, setOpenBar] = React.useState(false);
  const [sharedUsers, setSharedUsers] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
    axios
      .get(`https://safe-plains-62725.herokuapp.com/lists/${listID}/`, {
        headers: {
          authorization: `token ${token}`,
        },
      })
      .then((res) => {
        setSharedUsers(res.data.shared_users);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = (user) => {
    setOpen(false);
    axios
      .delete(
        `https://safe-plains-62725.herokuapp.com/lists/${listID}/remove/${user}/`,
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      )
      .then(() => {
        if (numberShared - 1 === 0) {
          setHasGuests(false);
        }
      });

    setOpenBar(true);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} sx={{ mr: 1.5 }}>
        <PersonRemoveIcon />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Remove Guests?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Click the icon on next the username to remove the user from this
            list immediately.
          </DialogContentText>
          <br />

          {sharedUsers.map((m) => (
            <Typography variant="subtitle1" key={m.id} sx={{ ml: 2, mb: 1 }}>
              {owner === username ? m.username : username}
              <IconButton onClick={(user) => handleRemove(m.username)}>
                <PersonRemoveIcon />
              </IconButton>
            </Typography>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openBar}
        onClose={() => setOpenBar(false)}
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Removed user.
        </Alert>
      </Snackbar>
    </div>
  );
}
