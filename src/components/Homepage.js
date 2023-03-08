import axios from "axios";
import { useQuery } from "react-query";
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
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Homepage = ({ setUser, username, token }) => {
  const [lists, setLists] = useState([]);
  const [sharedLists, setSharedLists] = useState([]);
  const location = useLocation();
  const [snackBar, setSnackBar] = useState(location.state?.openSnackBar);

  let active = [];
  let archived = [];

  //console.log(username);

  // const fetchList = () => {
  //   return axios.get(`https://safe-plains-62725.herokuapp.com/lists/me/`, {
  //     headers: {
  //       authorization: `token ${token}`,
  //     },
  //   });
  // };

  // const { isLoading, data } = useQuery("listInfo", fetchList, {
  //   refetchInterval: 2000,
  // });

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }

  //Loods data into useState to prop drill
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
        <Button
          fullWidth
          onClick={() => setExpansion(!isExpanded)}
          // size="large"
          variant="contained"
          sx={{ mb: "10px" }}
        >
          <strong>
            Archived Lists {archived.length > 0 ? `(${archived.length})` : null}
          </strong>
        </Button>
        {isExpanded && (
          <div className="expandedArchivedBox">
            {archived.map((list) => (
              <div style={{ mx: "30px" }} key={list.id}>
                <ListDetails list={list} token={token} username={username} />
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
        <strong>Forgot Milk?</strong>
      </Typography>
      <Divider sx={{ m: 2 }} />
      <div className="active-lists">
        <Typography variant="h5" sx={{ mb: "5px" }}>
          My Grocery Lists
        </Typography>
        {active.map((list) => (
          <ListDetails
            list={list}
            token={token}
            key={list.id}
            username={username}
          />
        ))}
      </div>
      <Divider sx={{ m: "10px" }} />
      <div className="shared-lists">
        <Typography variant="h5" sx={{ mb: "5px" }}>
          Shared Lists
        </Typography>
        {sharedLists.map((list) =>
          list.archived ? null : (
            <ListDetails
              list={list}
              token={token}
              key={list.id}
              username={username}
            />
          )
        )}
      </div>
      <Divider sx={{ m: "10px" }} />
      <ExpandedArchived />
      <div>
        <Tooltip title="Logout" arrow>
          <IconButton
            sx={{ position: "absolute", top: 18, right: 18 }}
            onClick={() => setUser(null)}
          >
            <Link component={RouterLink} to="/Login">
              <LogoutIcon />
            </Link>
          </IconButton>
        </Tooltip>
      </div>

      <CreateList token={token} />
    </section>
  );
};
