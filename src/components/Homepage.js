import { Link } from "react-router-dom";
import { requestAllLists } from './Requests';
import { ListDetails } from './ListDetails';
import { useEffect, useState } from "react";
import folder from "../img/folder.png"; 
import placeholder from "../img/chibi-mj.jpg";


export const Homepage = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    requestAllLists()
        .then(res =>  {
            setLists(res.data)
        })
},[])

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
  const [newListTitle, setNewListTitle] = useState("");
  return (
    <div>
      <button className="new-list-button" onClick={() => setPopUp(!isPopUp)}>
        <strong>{buttonName} Create New List</strong>
      </button>
      {isPopUp && (
        <div className="new-list-pop-up">
          <h1>Create A List</h1>
          <input
            className="New-List"
            type="New-List-input"
            placeholder="Title" />
            <button className="cancel-button" onClick={() =>setPopUp(!isPopUp)}>Cancel</button>
            <button className="submit-button">Submit</button>
            </div>)}
    </div>
  );
}


function CreateNewFolder() {
  const [isPopUp, setPopUp] = useState(false);
  const buttonName = isPopUp;
  const [newFolderTitle, setNewFolderTitle] = useState("");
  return (
    <div>
      <button className="new-folder-button" onClick={() => setPopUp(!isPopUp)}>
        <strong>{buttonName} Create New Folder</strong>
      </button>
      {isPopUp && (
        <div className="new-folder-pop-up">
          <h1>Create A Folder</h1>
          <input
            className="New-Folder"
            type="New-Folder-input"
            placeholder="Folder" />
            <button className="cancel-button" onClick={() =>setPopUp(!isPopUp)}>Cancel</button>
            <button className="submit-button">Submit</button>
            </div>)}
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