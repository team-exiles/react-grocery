import { Link } from "react-router-dom";
import { useState } from "react";
import { CreateListPopUp } from "./CreateListPopUp";
import folder from "../img/folder.png";
import placeholder from "../img/chibi-mj.jpg";



export const Homepage = () => {

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
        <div className="list-homepage-line">
          <span className="material-symbols-outlined">list</span>
          <span>Thursday Taco Night</span>
        </div>

        <div className="list-homepage-line">
          <span className="material-symbols-outlined">list</span>
          <span>Sunday Game</span>
        </div>
      </div>

      <div className="action-buttons">
        <button className="Make-New-Folder"></button>
        <button className="Make-New-List"></button>
        <button className="Start-Shopping"></button>
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
          <CreateNewList />
      </div>
    </section>
  );
};

function CreateNewList() {
  const [isPopUp, setPopUp] = useState(false);
  const buttonName = isPopUp ? "Less" : "";

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
            </div>
      )}
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