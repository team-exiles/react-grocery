import { Link } from "react-router-dom";
import axios from 'axios';
import { requestAllLists } from './Requests';
import { ListDetails } from './ListDetails';
import { useEffect, useState } from "react";
import folder from "../img/folder.png"; 
import placeholder from "../img/chibi-mj.jpg";

export const Homepage = ({setUser}) => {
  const [lists, setLists] = useState([])
  useEffect(() => {
    requestAllLists()
        .then(res =>  {
            setLists(res.data)
        })
},[])

const handleLogout = (token, setUser) => {
  axios
  .post('https://safe-plains-62725.herokuapp.com/auth/token/logout/',
  { headers: {Authorization: `Token ${token}`, }, })
  .then(() => setUser('',null))
  .catch(() => setUser('',null))
}

  return (
    <section className="homepage">
      <div className="homepage-header">
        <div className="logged-in-user">
          {/* This is placeholder info and image*/}
          <img src={placeholder} alt="avatar"className="avatar" />
          <div className="user-info">
            <h1 className="username-title">MJ Parker</h1>
            <span className="user-email">mjparker@dailybugle.com</span>
          </div>
        </div>
      </div>

      <div className="active-lists">
        {lists.map(list => (
          <div className="listall">
            <ListDetails list={list} /> 
          </div>
        ))}

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
          <span className="material-symbols-outlined">folder</span>
          <span>Archived</span>
          <ExpandedFolder />
        </div>
          <ShowButtons />
      </div>

      <div className="logout">
        <button><Link to="/Login" onClick={() => setUser(null)}>Logout</Link></button>
      </div>

    </section>
  );
};


function ShowButtons() {
  const [isPopUp, setPopUp] = useState(false);
  const buttonName = isPopUp;
  return (
    <div>
      <button className="show-buttons" onClick={() => setPopUp(!isPopUp)}>
        <strong>{buttonName} Show Buttons</strong>
      </button>
      {isPopUp && (
        <div className="more-buttons">
          <CreateNewList />
          <CreateNewFolder />
            </div>)}
    </div>
  );
}

function CreateNewList() {
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
          <h1>{title}</h1>
          <TextInput setTitle={setTitle} />
            <button className="cancel-button" onClick={() =>setPopUp(!isPopUp)}>Cancel</button>
            <button className="submit-button"><Link to="/Create" path="relative">Submit</Link></button>
        </div>)}
    </div>
  );
}

export function TextInput({ setTitle }) {
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

function CreateNewFolder() {
  const [isPopUp, setPopUp] = useState(false);
  const buttonName = isPopUp;
  const [folder, setFolder] = useState("Folder..");
  return (
    <div>
      <button className="new-folder-button" onClick={() => setPopUp(!isPopUp)}>
        <strong>{buttonName} Create New Folder</strong>
      </button>
      {isPopUp && (
        <div className="new-folder-pop-up">
          <h1>{folder}</h1>
          <FolderInput setFolder={setFolder} />
            <button className="cancel-button" onClick={() =>setPopUp(!isPopUp)}>Cancel</button>
            <button className="submit-button">Submit</button>
            </div>)}
    </div>
  );
}

function FolderInput({ setFolder }) {
  const [textInputField, setTextInputField] = useState("");
  const handleText = (e) => {
    e.preventDefault();
    setTextInputField(e.target.value);
    setFolder(e.target.value);
  };
  return (
    <div className="text-customizer">
      <div className="front-input">
        <input
          onChange={handleText}
          value={textInputField}
          placeholder="Enter Folder..."
        />
      </div>
    </div>
  );
}

function ExpandedFolder() {
  const [isExpanded, setExpansion] = useState(false);
  const buttonName = isExpanded ? "Less" : "More";

  return (
    <div>
      <button onClick={() => setExpansion(!isExpanded)}>
        <strong>{buttonName} Info</strong>
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