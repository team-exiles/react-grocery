import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShowListItems } from "./ShowListItems";
import { SendItems } from "./SendItem";
import { useLocation } from "react-router-dom";

export const CreateList = () => {
  // const [listTitle, setListTitle] = useState("Test");
  const [items, setItems] = useState([]);
  const location = useLocation();

  console.log(location, " useLocation hook");

  const title = location.state?.title;

  return (
    <div className="list-display">
      <div className="title-bar">
        <button>Back</button>
        <h1>{title}</h1>
        <button>Share</button>
        <button>Edit</button>
      </div>
      <SendItems items={items} setItems={setItems} />
      <ShowListItems items={items} />
    </div>
  );
};
