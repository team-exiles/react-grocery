import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListItems } from "./ListItems";
import SendItems from "./SendItem";

export const CreateList = () => {
  const [listTitle, setListTitle] = useState("Test");

  const handleText = (e) => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  return (
    <div className="list-display">
      <div className="title-bar">
        <button>Back</button>
        <h1>{listTitle}</h1>
        <button>Share</button>
        <button>Edit</button>
      </div>
      <ListItems />
      <SendItems />
    </div>
  );
};

// export const CreateList = () => {
//   const [list, setList] = useState("");
//   const [title, setTitle] = useState("Title..");

//   return (
//     <div>
//       <button>
//         <Link to="/">Home Page</Link>
//       </button>
//       <h1>{title}</h1>
//       <TextInput title={title} setTitle={setTitle} />

//        <form className="list-title">
//         <label htmlFor="titleInput" hidden>
//           Enter Title
//         </label>
//         <input
//           id="titleInput"
//           name="titleInput"
//           type="text"
//           className="form-input__input"
//           placeholder="Enter Title..."
//         />
//         <button type="submit">Send</button>
//       </form>
//       <ListItems />
//     </div>
//   );
// };

function TextInput({ title, setTitle }) {
  const [textInputField, setTextInputField] = useState("");

  const handleText = (e) => {
    e.preventDefault();
    // setTextInputField(e.target.value);
    setTitle(e.target.value);
  };

  return (
    <div className="title">
      <input
        className="title-input-field"
        onChange={handleText}
        value={title}
        placeholder="Enter Title..."
      />
    </div>
  );
}
