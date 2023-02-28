import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShowListItems } from "./ShowListItems";
import { SendItems } from "./SendItem";
import { useLocation } from "react-router-dom";
import { requestMakeList } from "./Requests"; 
import axios from "axios";

export const CreateList = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate("");

  console.log(location, " useLocation hook");

  const title = location.state?.title;

<<<<<<< HEAD
  const handleSubmit = (event) => {
    event.preventDefault();
    requestMakeList(username, password).then((res) => {
      const token = res.data.auth_token;
      console.log(token);
      setUser(token, username)
      navigate("/Homepage"); 
    });
  };


=======
>>>>>>> 118e94242a7316f601add84a8a76dcbf01a37cfc
  const handleCancel = (event) => {
    event.preventDefault();
    setItems([]);
    navigate("/Homepage");
  };

  return (
    <div className="list-display">
      <div className="title-bar">
<<<<<<< HEAD
        <button>Back</button>
=======
        <button className="cancel-list" onClick={handleCancel}>
          Cancel
        </button>
>>>>>>> 118e94242a7316f601add84a8a76dcbf01a37cfc
        <h1>{title}</h1>
      </div>
      <SendItems items={items} setItems={setItems} />
      <ShowListItems items={items} />
    </div>
  );
};

export const EditList = () => {
  const [items, setItems] = useState(null);
  const location = useLocation();
  const navigate = useNavigate("");

  const { listID } = useParams();
  const title = location.state?.title;
  // const id = location.state?.id;
  const token = location.state?.token;

  useEffect(() => {
    axios
      .get(`https://safe-plains-62725.herokuapp.com/lists/${listID}/`, {
        headers: {
          authorization: `token ${token}`,
        },
      })
      .then((res) => {
        setItems(res.data.listForItems);
        // console.log(items);
      });
  }, []);

  const handleBack = (event) => {
    event.preventDefault();
    setItems([]);
    navigate("/Homepage");
  };

  // console.log(items);

  return (
    items && (
      <div className="list-display">
        <div className="title-bar">
          <button className="back-list" onClick={handleBack}>
            Back
          </button>
          <h1>{title}</h1>
        </div>
        <SendItems items={items} setItems={setItems} />
        <ShowListItems items={items} token={token} />
      </div>
    )
  );
};
