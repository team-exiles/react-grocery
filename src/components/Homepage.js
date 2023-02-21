import { Link } from "react-router-dom";

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
            <button className="recipes-folder">Recipes</button>
            <button className="archived-folder">Archived</button>
          </div>
      </section>
        <button>
          <Link to="/Create" path="relative" className="createbutt">
            Pen List
          </Link>
        </button>
      </>
      )}

