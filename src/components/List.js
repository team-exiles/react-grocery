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

export const EditList = ({ token }) => {
  const [items, setItems] = useState(null);
  const [authID, setAuthID] = useState("");
  const location = useLocation();
  const navigate = useNavigate("");

  // const [color, setColor] = useState("success");
  // const [shoppingMode, setShoppingMode] = useState("Go shopping");

  const { listID } = useParams();
  const title = location.state?.title;
  const archiveStatus = location.state?.archiveStatus;
  //const token = location.state?.token;

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
        // console.log(items);
      });
  }, [listID, token]);

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
    navigate(`/shopping/${listID}/`, {
      state: {
        title: title,
        id: listID,
      },
    });
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
        />
        {archiveStatus ? (
          <Fab
            sx={{ position: "absolute", bottom: 30, right: 30 }}
            color="secondary"
            variant="extended"
            onClick={handleUnarchive}
          >
            <UnarchiveIcon sx={{ mr: 1 }} />
            Unarchive List
          </Fab>
        ) : (
          <Fab
            sx={{ position: "absolute", bottom: 30, right: 30 }}
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
