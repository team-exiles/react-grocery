import { Link } from "react-router-dom";
import { requestMakeList } from "./Requests";
import { requestMyLists } from "./Requests";
import { ListDetails } from "./ListDetails";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Homepage = ({ setUser, token }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    requestMyLists(token).then((res) => {
      setLists(res.data);
    });
  }, [token]);

  return (
    <section className="homepage">
      <div className="homepage-header">Milk & Eggs</div>

      <div className="active-lists">
        {lists.map((list) => (
          <div className="listall">
            <ListDetails list={list} token={token} />
          </div>
        ))}
        <br />
      </div>

      <div className="folders">
        <div className="recipe-folder">
          <span className="material-symbols-outlined">folder</span>
          <span className="homepage-text">Recipes</span>
          <ExpandedFolder />
        </div>

        <div className="archived-folder">
          <span className="material-symbols-outlined">
            <Link to="/Archives">folder</Link>
          </span>
          <span>Archived</span>
          <ExpandedFolder />
        </div>
      </div>

      <div className="logout">
        <button>
          <Link to="/Login" onClick={() => setUser(null)}>
            Logout
          </Link>
        </button>
      </div>
      <NewListPopUp token={token} />
    </section>
  );
};

function NewListPopUp({ token }) {
  const [isPopUp, setPopUp] = useState(false);
  const buttonName = isPopUp;
  const [title, setTitle] = useState("Untitled");
  let listID = "";
  const navigate = useNavigate();

  const handleSubmit = () => {
    const url = "https://safe-plains-62725.herokuapp.com/lists/me/";
    axios
      .post(
        url,
        { title: `${title}` },
        { headers: { Authorization: `token ${token}` } }
      )
      .then((res) => {
        console.log(res.data.id);
        listID = res.data.id;
        console.log(`${title} ${listID} ${token}`);
        navigate(`/lists/edit/${listID}/`, {
          state: {
            title: title,
            id: listID,
            token: token,
          },
        });
        setTitle("Untitled");
      });
  };

  return (
    <div>
      <button className="new-list-button" onClick={() => setPopUp(!isPopUp)}>
        <strong>{buttonName} Create New List</strong>
      </button>
      {isPopUp && (
        <div className="new-list-pop-up">
          <div className="title">
            <h1>New List Title?</h1>
          </div>
          <br />
          <br />
          <TextInput setTitle={setTitle} />
          <button className="cancel-button" onClick={() => setPopUp(!isPopUp)}>
            Cancel
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            {/* <Link
              to="/Create"
              className="submit-link"
              path="relative"
              state={{ title: title, listID: listID }}
            > 
            </Link>
            */}
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

function TextInput({ setTitle }) {
  const [textInputField, setTextInputField] = useState("");
  const handleText = (e) => {
    e.preventDefault();
    setTextInputField(e.target.value);
    setTitle(e.target.value);
  };
  return (
    <div className="text-customizer">
      <div className="front-input">
        <input
          onChange={handleText}
          value={textInputField}
          placeholder="Enter Title..."
        />
      </div>
    </div>
  );
}

// function CreateNewFolder() {
//   const [isPopUp, setPopUp] = useState(false);
//   const buttonName = isPopUp;
//   const [folder, setFolder] = useState("Folder..");
//   return (
//     <div>
//       <button className="new-folder-button" onClick={() => setPopUp(!isPopUp)}>
//         <strong>{buttonName} Create New Folder</strong>
//       </button>
//       {isPopUp && (
//         <div className="new-folder-pop-up">
//           <h1>{folder}</h1>
//           <FolderInput setFolder={setFolder} />
//           <button className="cancel-button" onClick={() => setPopUp(!isPopUp)}>
//             Cancel
//           </button>
//           <button className="submit-button">Submit</button>
//         </div>
//       )}
//     </div>
//   );
// }

// function FolderInput({ setFolder }) {
//   const [textInputField, setTextInputField] = useState("");
//   const handleText = (e) => {
//     e.preventDefault();
//     setTextInputField(e.target.value);
//     setFolder(e.target.value);
//   };
//   return (
//     <div className="text-customizer">
//       <div className="front-input">
//         <input
//           onChange={handleText}
//           value={textInputField}
//           placeholder="Enter Folder..."
//         />
//       </div>
//     </div>
//   );
// }

function ExpandedFolder() {
  const [isExpanded, setExpansion] = useState(false);
  const buttonName = isExpanded ? "Less" : "More";
  return (
    <div>
      <button onClick={() => setExpansion(!isExpanded)}>
        <div className="recipe-folder">
          <span className="material-symbols-outlined">folder</span>
          <span className="homepage-text">Recipes</span>
        </div>
      </button>
      {isExpanded && (
        <div className="expandedBox">
          <p>grocery list</p>
          <p>party list</p>
        </div>
      )}
    </div>
  );
}
