import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import { requestMyLists } from "./Requests";
import { ListDetails } from "./ListDetails";
import { useEffect, useState } from "react";
import CreateList from "./CreateList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from '@mui/icons-material/Logout';


export const Homepage = ({ setUser, token }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    requestMyLists(token).then((res) => {
      setLists(res.data);
    });
  }, [token]);

  return (
    <section className="homepage">
      <Typography variant="h4" align="center">Forgot Milk?</Typography>
      <Divider sx={{ m: 2 }} />
      <div className="active-lists">
        {lists.map((list) => (
          <Card variant="outlined"
          sx={{
            p:2,
            m:2,
          }}
          
          >
            <ListDetails list={list} token={token} />
          </Card>
        ))}
        <Divider sx={{ m: 2 }} />
        {/* <div className="archived-folder">
          <span className="material-symbols-outlined">
            <Link to="/Archives">folder</Link>
          </span>
          <span>Archived</span>
          <ExpandedFolder />
        </div> */}
      </div>
      <div>
        <IconButton
        sx={{ position: "absolute", top: 10, left: 10 }}
        >
          <Link
            component={RouterLink}
            to="/Login"
            onClick={() => setUser(null)}>
          <LogoutIcon />
          </Link>
        </IconButton>
        {/* </Fab> */}
      </div>

      <CreateList token={token} />
    </section>
  );
};