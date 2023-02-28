import { Link } from "react-router-dom";
import axios from "axios";
import { requestMyLists } from "./Requests";
import { ListDetails } from "./ListDetails";
import { useEffect, useState } from "react";

export const Homepage = ({ setUser, username, token }) => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    axios
      .get(`https://safe-plains-62725.herokuapp.com/lists/me/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((res) => {
        setLists(res.data);
      });
  }, [token]);

  // useEffect(() => {
  //   requestMyLists(token).then((res) => {
  //     setLists(res.data);
  //   });
  // }, [lists, token]);

  return (
    <section className="homepage">
      <div className="homepage-header">Milk & Eggs</div>

      <div className="active-lists">
        {lists.map((list) => (
          <div className="listall">
            <ListDetails list={list} token={token} />
          </div>
        ))}
      </div>

      <div className="folders">
        <div className="recipe-folder">
          <span className="material-symbols-outlined">folder</span>
          <span className="homepage-text">Recipes</span>
          <ExpandedFolder />
        </div>

        <div className="archived-folder">
          <span className="material-symbols-outlined">folder</span>
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
      <NewListPopUp />
    </section>
  );
};

function NewListPopUp() {
  const [isPopUp, setPopUp] = useState(false);
  const buttonName = isPopUp;
  const [title, setTitle] = useState("Title..");
  return (
    <div>
      <button className="new-list-button" onClick={() => setPopUp(!isPopUp)}>
        <strong>{buttonName} Create New List</strong>
      </button>
      {isPopUp && (
        <div className="new-list-pop-up">
          <div className="title">
            <h1>Create A List</h1>
          </div>
          <TextInput setTitle={setTitle} />
          <button className="cancel-button" onClick={() => setPopUp(!isPopUp)}>
            Cancel
          </button>
          <button className="submit-button">
            <Link to="/Create" path="relative" state={{ title: title }}>
              Submit
            </Link>
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
