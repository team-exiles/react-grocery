import { useEffect, useState } from "react";
import * as React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Stack, Fab, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import IconButton from "@mui/material/IconButton";
import InviteButton from "./InviteButton.js";
import DeleteList from "./DeleteList";
import { ShowListItems } from "./ShowListItems";
import { SendItems } from "./SendItem";
import RemoveUser from "./RemoveUser";

const style = {
  margin: 0,
  top: "auto",
  right: 35,
  bottom: 35,
  left: "auto",
  position: "fixed",
};

export const EditList = ({ token, username, setToken }) => {
  const [items, setItems] = useState(null);
  const [authID, setAuthID] = useState("");
  const [title, setTitle] = useState("");
  const [archiveStatus, setArchivedStatus] = useState(null);
  const [hasGuests, setHasGuests] = useState();
  const [numberShared, setNumberShared] = useState();
  const [flagColor, setFlagColor] = useState("");
  const location = useLocation();
  const navigate = useNavigate("");

  const { listID } = useParams();
  //const archiveStatus = location.state?.archiveStatus;
  if (token === undefined) {
    setToken(location.state?.token);
  }
  //console.log(token);

  useEffect(() => {
    axios
      .get(`https://safe-plains-62725.herokuapp.com/lists/${listID}/`, {
        headers: {
          authorization: `token ${token}`,
        },
      })
      .then((res) => {
        setItems(res.data.listForItems);
        setAuthID(res.data.auth_id);
        setTitle(res.data.title);
        setArchivedStatus(res.data.archived);
        setNumberShared(res.data.shared_users.length);

        if (res.data.shared_users.length > 0) {
          setHasGuests(true);
        }

        // console.log(items);
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 403") {
          navigate("/Login");
        }
      });
  }, [listID, token, navigate]);

  const handleBack = (event) => {
    event.preventDefault();
    setItems([]);
    navigate("/Homepage");
  };

  const handleUnarchive = () => {
    axios
      .patch(
        `https://safe-plains-62725.herokuapp.com/lists/${listID}/`,
        { archived: false },
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      )
      .then((res) => navigate("/Homepage"));
  };

  const handleShopping = () => {
    axios
      .patch(
        `https://safe-plains-62725.herokuapp.com/lists/${listID}/`,
        { active_shopping: true },
        {
          headers: {
            authorization: `token ${token}`,
          },
        }
      )
      .then(
        navigate(`/shopping/${listID}/`, {
          state: {
            title: title,
            id: listID,
          },
        })
      );
  };

  return (
    items && (
      <div className="list-display">
        {/* <div className="title-bar"> */}
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          <IconButton
            aria-label="back to homepage"
            variant="filled"
            onClick={handleBack}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" width="100%" justifyContent="center">
            {title}
          </Typography>
          <InviteButton listID={listID} authID={authID} token={token} />
          {hasGuests ? (
            <RemoveUser
              listID={listID}
              token={token}
              setHasGuests={setHasGuests}
              numberShared={numberShared}
            />
          ) : null}

          <DeleteList listID={listID} token={token} title={title} />

          {/* </div> */}
        </Stack>

        <SendItems
          items={items}
          setItems={setItems}
          token={token}
          listID={listID}
        />
        <ShowListItems
          items={items}
          setItems={setItems}
          token={token}
          listID={listID}
          flagColor={flagColor}
        />
        {archiveStatus ? (
          <Fab
            sx={{ position: "fixed", bottom: 30, right: 30 }}
            color="secondary"
            variant="extended"
            onClick={handleUnarchive}
          >
            <UnarchiveIcon sx={{ mr: 1 }} />
            Unarchive List
          </Fab>
        ) : (
          <Fab
            sx={style}
            color="success"
            variant="extended"
            onClick={handleShopping}
          >
            <ShoppingCartCheckoutIcon sx={{ mr: 1 }} />
            Go Shopping
          </Fab>
        )}
      </div>
    )
  );
};
