import { Link } from "react-router-dom";

export const ListDetails = ({ list, token }) => {
  const handleClick = () => {};

  return (
    <>
      <Link
        to="/lists/edit"
        path="relative"
        state={{ title: list.title, id: list.id, token: token }}
      >
        <div className="list-homepage-line" key={list.id} onClick={handleClick}>
          ;<span className="material-symbols-outlined">list</span>
          <span className="list-title">{list.title}</span>
        </div>
      </Link>
    </>
  );
};

//     </div>
// <div className="list-container">
//   <span className="list-title" key={list.id}>
//     {list.title}
//   </span>
