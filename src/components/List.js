import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShowListItems } from "./ShowListItems";
import { SendItems } from "./SendItem";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const CreateList = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate("");

  console.log(location, " useLocation hook");

  const title = location.state?.title;

  const handleCancel = (event) => {
    event.preventDefault();
    setItems([]);
    navigate("/Homepage");
  };

  return (
    <div className="list-display">
      <div className="title-bar">
        <button className="cancel-list" onClick={handleCancel}>
          Cancel
        </button>
        <h1>{title}</h1>
      </div>
      <SendItems items={items} setItems={setItems} />
      <ShowListItems items={items} />
    </div>
  );
};

export const EditList = () => {
  // const [listTitle, setListTitle] = useState("Test");
  const [items, setItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate("");

  const title = location.state?.title;
  const id = location.state?.id;
  const token = location.state?.token;

  useEffect(() => {
    axios
      .get(`https://safe-plains-62725.herokuapp.com/lists/${id}/`, {
        headers: {
          authorization: `token ${token}`,
        },
      })
      .then((res) => {
        setItems(res.data);
        console.log(res.data.listForItems[1].item);
      });
  }, [id, token]);

  const handleCancel = (event) => {
    event.preventDefault();
    setItems([]);
    navigate("/Homepage");
  };

  return (
    <div className="list-display">
      <div className="title-bar">
        <button className="cancel-list" onClick={handleCancel}>
          Cancel
        </button>
        <h1>{title}</h1>
      </div>
      <SendItems items={items} setItems={setItems} />
      {/* <ShowListItems items={items} /> */}
    </div>
  );
};
