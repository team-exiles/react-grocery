import { Link } from "react-router-dom";
import { requestAllLists } from './Requests';
import { useEffect, useState } from "react";
import folder from "../img/folder.png"; 

export const Homepage = () => {
  const [list, setList] = useState("")

  useEffect(() => {
    requestAllLists()
        .then(res =>  {
            setList(res.data)
        })
}, [])

  return (
      <>
        <section className="homepage"> 
        <div className="logged-in-user">
          <h2> Welcome, INSERT USERNAME! </h2>
          <h3> Email </h3>
        </div>

        <div className="active-lists">
          <h2>Here are my active lists:</h2>
          <button className="listbutt"><p>List 1</p></button>
          <button className="listbutt"><p>List 2</p></button>
          <button className="listbutt"><p>List 3</p></button>
          <button className="listbutt"><p>McLovin's Salad</p></button>
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