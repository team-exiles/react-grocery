import { Link } from "react-router-dom";

export const ListDetails = ({ list, token }) => {
  return (
    <>
      <Link
        to={`/lists/edit/${list.id}/`}
        path="relative"
        state={{ title: list.title, id: list.id, token: token }}
      >
        <div className="list-homepage-line" key={list.id}>
          <span className="material-symbols-outlined">list</span>
          <span className="list-title">{list.title}</span>
        </div>
      </Link>
    </>
  );
};
