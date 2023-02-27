import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";import { ShowListItems } from "./ShowListItems";
import { SendItems } from "./SendItem";
import { useLocation } from "react-router-dom";
import { requestMakeList } from "./Requests"; 

export const CreateList = () => {
  // const [listTitle, setListTitle] = useState("Test");
  const [items, setItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate("");

  console.log(location, " useLocation hook");

  const title = location.state?.title;

  const handleSubmit = (event) => {
    event.preventDefault();
    requestMakeList(username, password).then((res) => {
      const token = res.data.auth_token;
      console.log(token);
      setUser(token, username)
      navigate("/Homepage"); 
    });
  };


  const handleCancel = (event) => {
    event.preventDefault()
    setItems([])
    navigate("/")
  }

  return (
    <div className="list-display">
      <div className="title-bar">
        <button>Back</button>
        <h1>{title}</h1>
      </div>
      <SendItems items={items} setItems={setItems} />
      <ShowListItems items={items} />
    </div>
  );
};
