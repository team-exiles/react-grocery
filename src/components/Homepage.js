import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import { requestMyLists } from "./Requests";
import { ListDetails } from "./ListDetails";
import { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import CreateList from "./CreateList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { CssVarsProvider } from "@mui/joy/styles";
// import Add from "@mui/icons-material/Add";
// import Typography from "@mui/joy/Typography";
// import Input from "@mui/joy/Input";
// import FormControl from "@mui/joy/FormControl";

export const Homepage = ({ setUser, token }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    requestMyLists(token).then((res) => {
      setLists(res.data);
    });
  }, [token]);

  return (
    <section className="homepage">
      <Typography variant="h4">Forgot Milk?</Typography>
      <Divider sx={{ m: 2 }} />
      <div>
        {lists.map((list) => (
          <Card variant="outlined">
            <ListDetails list={list} token={token} />
          </Card>
        ))}

        {/* <div className="archived-folder">
          <span className="material-symbols-outlined">
          <Link to="/Archives">folder</Link>
          </span>
          <span>Archived</span>
          <ExpandedFolder />
        </div> */}
      </div>
      <Divider sx={{ m: 2 }} />

      <div>
        {/* <button>
          <Link to="/Login" onClick={() => setUser(null)}>
            Logout
          </Link>
        </button> */}
        <Button size="sm" variant="soft">
          <Link
            component={RouterLink}
            to="/Login"
            onClick={() => setUser(null)}
          >
            Logout
          </Link>
        </Button>
      </div>

      <CreateList token={token} />
    </section>
  );
};

// function CreateNewFolder() {
//   const [isPopUp, setPopUp] = useState(false);
//   const buttonName = isPopUp;
//   const [folder, setFolder] = useState("Folder..");
//   return (
//     <div>
//       <button className="new-folder-button" onClick={() => setPopUp(!isPopUp)}>
//         <strong>{buttonName} Create New Folder</strong>
//       </button>
//       {isPopUp && (
//         <div className="new-folder-pop-up">
//           <h1>{folder}</h1>
//           <FolderInput setFolder={setFolder} />
//           <button className="cancel-button" onClick={() => setPopUp(!isPopUp)}>
//             Cancel
//           </button>
//           <button className="submit-button">Submit</button>
//         </div>
//       )}
//     </div>
//   );
// }

// function FolderInput({ setFolder }) {
//   const [textInputField, setTextInputField] = useState("");
//   const handleText = (e) => {
//     e.preventDefault();
//     setTextInputField(e.target.value);
//     setFolder(e.target.value);
//   };
//   return (
//     <div className="text-customizer">
//       <div className="front-input">
//         <input
//           onChange={handleText}
//           value={textInputField}
//           placeholder="Enter Folder..."
//         />
//       </div>
//     </div>
//   );
// }

// function ExpandedFolder() {
//   const [isExpanded, setExpansion] = useState(false);
//   const buttonName = isExpanded ? "Less" : "More";
//   return (
//     <div>
//       <button onClick={() => setExpansion(!isExpanded)}>
//         <div className="recipe-folder">
//           <span className="material-symbols-outlined">folder</span>
//           <span className="homepage-text">Recipes</span>
//         </div>
//       </button>
//       {isExpanded && (
//         <div className="expandedBox">
//           <p>grocery list</p>
//           <p>party list</p>
//         </div>
//       )}
//     </div>
//   );
// }
