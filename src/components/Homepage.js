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

  useEffect(() => {
    requestMyLists(token).then((res) => {
      setLists(res.data);
    });
  }, [token]);

  return (
    <section className="homepage">
      <Typography variant="h4" align="center">
        Forgot Milk?
      </Typography>
      <Divider sx={{ m: 2 }} />
      <div className="active-lists">
        {lists.map((list) => (
          <ListDetails list={list} token={token} />
        ))}
        <Divider />
      </div>

      <div>
        <IconButton sx={{ position: "absolute", top: 18, left: 18 }}>
          <Link
            component={RouterLink}
            to="/Login"
            onClick={() => setUser(null)}
          >
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
