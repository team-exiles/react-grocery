import { Link } from "react-router-dom";
import { requestMyLists } from "./Requests";
import { requestMakeList } from "./Requests"; 
import { ListDetails } from "./ListDetails";
import { useEffect, useState } from "react";
import placeholder from "../img/chibi-mj.jpg";

export const Homepage = ({ setUser, token }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    requestMyLists(token).then((res) => {
      setLists(res.data);
    });
  }, [token]);


  return (
    <section className="homepage">
      <div className="homepage-header">
        <div className="logged-in-user">
          {/* This is placeholder info and image*/}
          <img src={placeholder} alt="avatar" className="avatar" />
          <div className="user-info">
            <h1 className="username-title">MJ Parker</h1>
            <span className="user-email">mjparker@dailybugle.com</span>
          </div>
        </div>
      </div>

      <div className="active-lists">
        {lists.map((list) => (
          <div className="listall">
            <ListDetails list={list} />
          </div>
        ))}

        <br/>
        <br/>

        <div className="list-homepage-line">
          <span className="material-symbols-outlined">list</span>
          <span>Thursday Taco Night</span>
        </div>

        <div className="list-homepage-line">
          <span className="material-symbols-outlined">list</span>
          <span>Sunday Game</span>
        </div>
      </div>

      {/* <div className="action-buttons">
        <button className="Make-New-Folder"></button>
        <button className="Make-New-List"></button>
        <button className="Start-Shopping"></button>
      </div> */}

      <div className="folders">
        <div className="recipe-folder">
          <span className="material-symbols-outlined">folder</span>
          <span className="homepage-text">Recipes</span>
          <ExpandedFolder />
        </div>

        <div className="archived-folder">
          <span className="material-symbols-outlined"><Link to="/Archives">folder</Link></span>
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

      < NewListPopUp />
    </section>
  );
};












///// 

function NewListPopUp({token}) {
  const [isPopUp, setPopUp] = useState(false);
  const buttonName = isPopUp;
  const [title, setTitle] = useState("Title..");
  const [create, setCreate] = useState({});

  let createList = {
    "title": `${title}`,
  }

  const handleSubmit = (event) => {
    requestMakeList(token, createList)
      setTitle("Title..")
      setCreate(createList)
  }


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
          <br/>
          <br/>
          <TextInput setTitle={setTitle} />
          <button className="cancel-button" onClick={() => setPopUp(!isPopUp)}>
            Cancel
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            <Link to="/Create" className="submit-link" path="relative" state={{ title: title }}>
              Submit
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}


//END OF FOCUS HERE 
















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
