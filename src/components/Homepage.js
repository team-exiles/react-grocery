import { Link } from "react-router-dom";
import { useState } from "react";
import folder from "../img/folder.png"; 

export const Homepage = () => {
  return (
      <>
        <section className="homepage"> 
        <div className="logged-in-user">
          <h2> Username </h2>
          <h3> Email </h3>
        </div>

        <div className="active-lists">
          <h2>Here are my active lists</h2>
          <p>List 1</p>
          <p>List 2</p>
          <p>List 3</p>
        </div>

          <div className="action-buttons">
            <button className="Make-New-Folder"></button>
            <button className="Make-New-List"></button>
            <button className="Start-Shopping"></button>
          </div>

          <div className="folders">

            <div className="recipe-folder">
              <img src={folder} className="folder-pic" alt="folder" />
              <h4>Recipes</h4>< ExpandedFolder />
            </div>

            <div className="archived-folder">
            <img src={folder} className="folder-pic" alt="folder" />
              <h4>Archived</h4>< ExpandedFolder />
            </div>

          </div>

      </section>


        <button>
          <Link to="/Create" path="relative" className="createbutt">
            Pen List
          </Link>
        </button>
      </>
      )}

      function ExpandedFolder(){
        const [isExpanded, setExpansion] = useState(false);
        const buttonName = isExpanded ? "Less" : "More";

        return (
          <div>
              <button onClick={() => setExpansion(!isExpanded)}><strong>{buttonName} Info</strong></button>
              {isExpanded && (
                  <div className="expandedBox">
                    <p>grocery list</p>
                    <p>party list</p>
                  </div>
              )}
          </div>   
      )
  }