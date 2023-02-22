import { Link } from "react-router-dom";
import { useState } from "react";
import folder from "../img/folder.png";
import placeholder from "../img/chibi-mj.jpg";

export const Homepage = () => {
  return (
    <>
      <section className="homepage">
        <div className="logged-in-user">
          <span className="avatar">
            <img src={placeholder} />
          </span>
          <h2> Welcome, User</h2>
          <h3> Email </h3>
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
        </div>
      </section>

      <button>
        <Link to="/Create" path="relative" className="createbutt">
          Pen List
        </Link>
      </button>
    </>
  );
};

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
