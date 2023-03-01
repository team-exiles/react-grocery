import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ShowListItems } from "./ShowListItems";
import { SendItems } from "./SendItem";
import { useLocation } from "react-router-dom";
import axios from "axios";

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
  }, [listID, token]);

  const handleBack = (event) => {
    event.preventDefault();
    setItems([]);
    navigate("/Homepage");
  };

  return (
    items && (
      <div className="list-display">
        <div className="title-bar">
          <button className="back-list" onClick={handleBack}>
            Back
          </button>
          <h1>{title}</h1>
          <button className="delete-list">Delete</button>
        </div>
        <SendItems
          items={items}
          setItems={setItems}
          token={token}
          listID={listID}
        />
        <ShowListItems items={items} token={token} />
      </div>
    )
  );
};

// export const CreateList = () => {
//   const [items, setItems] = useState([]);
//   const location = useLocation();
//   const navigate = useNavigate("");

//   console.log(location, " useLocation hook");

//   const title = location.state?.title;
//   const listID = location.state?.listID;

//   const handleCancel = (event) => {
//     event.preventDefault();
//     setItems([]);
//     navigate("/Homepage")
//   };

//   return (
//     <div className="list-display">
//       <div className="title-bar">
//         <button><Link to="/Homepage">Back</Link></button>
//         <button className="cancel-list" onClick={handleCancel}>
//           Cancel
//         </button>
//         <h1>{title}</h1>
//       </div>
//       <SendItems items={items} setItems={setItems} />
//       <ShowListItems items={items} />
//       <button onClick={handleCancel}>Cancel List</button>
//     </div>
//   );
// };
