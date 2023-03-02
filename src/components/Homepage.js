import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import { requestMyLists } from "./Requests";
import { ListDetails } from "./ListDetails";
import { useEffect, useState } from "react";
import CreateList from "./CreateList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// import Card from "@mui/material/Card";
// import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

export const Homepage = ({ setUser, token }) => {
  const [lists, setLists] = useState([]);
  // const [activeList, setActiveList] = useState([]);
  // const [archivedList, setArchivedList] = useState([]);
  let active = [];
  let archived = [];

  useEffect(() => {
    requestMyLists(token).then((res) => {
      setLists(res.data);
    });
  }, [token]);

  const filterList = () => {
    active = lists.filter((list) => list.archived === true);
    archived = lists.filter((list) => list.archived === false);
  };

  filterList();
  console.log(active);
  console.log(archived);

  return (
    <section className="homepage">
      <Typography variant="h4" align="center">
        Forgot Milk?
      </Typography>
      <Divider sx={{ m: 2 }} />
      <div className="active-lists">
        <Typography>Grocery Lists</Typography>
        {active.map((list) => (
          <ListDetails list={list} token={token} key={list.id} />
        ))}
      </div>
      <Divider />
      <div>
        <Typography>Archived Lists</Typography>
        {archived.map((list) => (
          <ListDetails list={list} token={token} key={list.id} />
        ))}
      </div>

      <div>
        <IconButton
          sx={{ position: "absolute", top: 18, left: 18 }}
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

// <div className="archived-folder">
//  <span className="material-symbols-outlined">
//  <Link to="/Archives">folder</Link>
//  </span>
//  <span>Archived</span>
//  <ExpandedFolder />
//</div>
