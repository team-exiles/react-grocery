//import { useNavigate } from "react-router-dom";
import * as React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import { requestMyLists, requestSharedLists } from "./Requests";
import { ListDetails } from "./ListDetails";
import { useEffect, useState } from "react";
import CreateList from "./CreateList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Homepage = ({ setUser, username, token }) => {
  const [lists, setLists] = useState([]);
  const [sharedLists, setSharedLists] = useState([]);
  const location = useLocation();
  const [snackBar, setSnackBar] = useState(location.state?.openSnackBar);
  //  const navigate = useNavigate();
  let active = [];
  let archived = [];


  useEffect(() => {
    requestMyLists(token).then((res) => {
      setLists(res.data);
    });
  }, [token]);

  useEffect(() => {
    requestSharedLists(token).then((res) => {
      setSharedLists(res.data);
    });
  }, [token]);

  const handleClose = () => {
    setSnackBar(false);
  };

  const filterList = () => {
    active = lists.filter((list) => list.archived === false);
    archived = lists.filter((list) => list.archived === true);
  };

  function ExpandedArchived() {
    const [isExpanded, setExpansion] = useState(false);

    return (
      <div>
        <Button onClick={() => setExpansion(!isExpanded)} size="large">
          <strong>
            Archived Lists {archived.length > 0 ? `(${archived.length})` : null}
          </strong>
        </Button>
        {isExpanded && (
          <div className="expandedArchivedBox">
            {archived.map((list) => (
              <div style={{ marginLeft: "30px" }}>
                <ListDetails list={list} token={token} key={list.id} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  //Calls Filtering function to separate the lists from archived and unarchived.
  filterList();

  return (
    <section className="homepage">
      <Snackbar
        open={snackBar}
        onClose={() => setSnackBar(false)}
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          List Deleted
        </Alert>
      </Snackbar>
      <Typography variant="h4" align="center">
        Forgot Milk?
      </Typography>
      <Divider sx={{ m: 2 }} />
      <div className="active-lists">
        <Typography variant="h5">Grocery Lists</Typography>
        {active.map((list) => (
          <ListDetails list={list} token={token} key={list.id} />
        ))}
      </div>
      <Divider />
      <div className="shared-lists">
        <Typography variant="h5">Shared Lists</Typography>
        {sharedLists.map((list) => (
          <ListDetails list={list} token={token} key={list.id} />
        ))}
      </div>
      <Divider />
      <ExpandedArchived />
      <div>
        <IconButton
          sx={{ position: "absolute", top: 18, right: 18 }}
          onClick={() => setUser(null)}
        >
          <Link component={RouterLink} to="/Login">
            <LogoutIcon />
          </Link>
        </IconButton>
      </div>

      <CreateList token={token} />
    </section>
  );
};
