import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShowListItems } from "./ShowListItems";
import { SendItems } from "./SendItem";
import { useLocation, Link } from "react-router-dom";

export const CreateList = () => {
  // const [listTitle, setListTitle] = useState("Test");
  const [items, setItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate("");

  console.log(location, " useLocation hook");

  const title = location.state?.title;

  const handleCancel = (event) => {
    event.preventDefault()
    setItems([])
    navigate("/Homepage")
  }

  return (
    <div className="list-display">
      <div className="title-bar">
        <button><Link to="/Homepage">Back</Link></button>
        <h1>{title}</h1>
      </div>
      <SendItems items={items} setItems={setItems} />
      <ShowListItems items={items} />
      <button onClick={handleCancel}>Cancel List</button>
    </div>
  );
};
