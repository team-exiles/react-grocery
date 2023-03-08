import { useEffect, useState, useRef } from "react";
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
import { useQuery } from "react-query";

const style = {
  margin: 0,
  top: "auto",
  right: 35,
  bottom: 35,
  left: "auto",
  position: "fixed",
};

export const EditList = ({ token, username, setToken }) => {
  const scroll = useRef();
  const [items, setItems] = useState(null);
  const [authID, setAuthID] = useState("");
  const [title, setTitle] = useState("");
  const [archiveStatus, setArchivedStatus] = useState(null);
  const [hasGuests, setHasGuests] = useState();
  const [numberShared, setNumberShared] = useState();
  const [flagColor, setFlagColor] = useState("");
  const location = useLocation();
  const navigate = useNavigate("");
  const [owner, setOwner] = useState("");
  const [shoppingStatus, setShoppingStatus] = useState("");

  const { listID } = useParams();
  //const archiveStatus = location.state?.archiveStatus;
  if (token === undefined) {
    setToken(location.state?.token);
  }

  useEffect(() => {
    axios
      .get(`https://safe-plains-62725.herokuapp.com/lists/${listID}/`, {
        headers: {
          authorization: `token ${token}`,
        },
      })
      .then((data) => {
        setOwner(data.data.owner);
        setItems(data.data.listForItems);
        setAuthID(data.data.auth_id);
        setTitle(data.data.title);
        setArchivedStatus(data.data.archived);
        setNumberShared(data.data.shared_users.length);
        setShoppingStatus(data.data.active_shopping);

        if (data.data.shared_users.length > 0) {
          setHasGuests(true);
        }
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 403") {
          navigate("/Login");
        }
      });
  }, [listID, token, navigate, owner]);

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

  const titleBarButtons = (guests) => {
    return (
      <>
        <InviteButton listID={listID} authID={authID} token={token} />
        {guests ? (
          <RemoveUser
            listID={listID}
            token={token}
            setHasGuests={setHasGuests}
            numberShared={numberShared}
          />
        ) : null}
        <DeleteList listID={listID} token={token} title={title} />
      </>
    );
  };

  return (
    items && (
      <div className="wrap">
        <div className="list">
          <div className="list-display topbar">
            {/* <div className="title-bar"> */}
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              sx={{ mt: 0 }}
            >
              <IconButton
                aria-label="back to homepage"
                variant="filled"
                onClick={handleBack}
              >
                <ArrowBackIcon sx={{ ml: "10px" }} />
              </IconButton>
              <Typography variant="h5" width="100%" justifyContent="center">
                {title}
              </Typography>
              {username === owner ? titleBarButtons(hasGuests) : null}

              {/* <InviteButton listID={listID} authID={authID} token={token} /> 
              {hasGuests ? (
                <RemoveUser
                  listID={listID}
                  token={token}
                  setHasGuests={setHasGuests}
                  numberShared={numberShared}
                />
              ) : null}

               */}

              {/* </div> */}
            </Stack>

            <SendItems
              items={items}
              setItems={setItems}
              token={token}
              listID={listID}
              scroll={scroll}
            />
          </div>
          <ShowListItems
            items={items}
            setItems={setItems}
            token={token}
            listID={listID}
            flagColor={flagColor}
            scroll={scroll}
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
          ) : owner === username ? (
            fabForUser(handleShopping, owner, username)
          ) : (
            fabForGuest(handleShopping, owner, username)
          )}
        </div>
      </div>
    )
  );
};

function fabForUser(handleShopping, owner, username) {
  return (
    <>
      <Fab
        sx={style}
        color="success"
        variant="extended"
        onClick={handleShopping}
      >
        <ShoppingCartCheckoutIcon sx={{ mr: 1 }} />
        GO SHOPPING
      </Fab>
    </>
  );
}

function fabForGuest(handleShopping, owner, username) {
  return (
    <>
      <Fab
        className="rise-shake"
        sx={style}
        color="success"
        variant="extended"
        onClick={handleShopping}
      >
        <ShoppingCartCheckoutIcon sx={{ mr: 1 }} />
        JOIN SHOPPER
      </Fab>
    </>
  );
}
