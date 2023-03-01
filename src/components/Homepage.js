import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import { requestMyLists } from "./Requests";
import { ListDetails } from "./ListDetails";
import { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import CreateList from "./CreateList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
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
      {/* <CssVarsProvider> */}
      <Typography variant="h4" align="center">Forgot Milk?</Typography>
      <Divider sx={{ m: 2 }} />




      <div className="active-lists">
        <Stack
        spacing={3}
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="space-evenly"
        alignItems="flex-start"
        sx={{ mt: 4 }}
        >

        {lists.map((list) => (
          <div className="listall">
            <ListDetails list={list} token={token} />
          </div>
        ))}
        <Divider sx={{ m: 2 }} />
        </Stack>

        {/* <div className="archived-folder">
          <span className="material-symbols-outlined">
            <Link to="/Archives">folder</Link>
          </span>
          <span>Archived</span>
          <ExpandedFolder />
        </div> */}
      </div>






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

      {/* <NewListPopUp token={token} /> */}
      {/* </CssVarsProvider> */}
    </section>
  );
};

// function NewListPopUp({ token }) {
//   const [isPopUp, setPopUp] = useState(false);
//   const buttonName = isPopUp;
//   const [title, setTitle] = useState("Untitled");
//   let listID = "";
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     const url = "https://safe-plains-62725.herokuapp.com/lists/me/";
//     axios
//       .post(
//         url,
//         { title: `${title}` },
//         { headers: { Authorization: `token ${token}` } }
//       )
//       .then((res) => {
//         listID = res.data.id;
//         navigate(`/lists/edit/${listID}/`, {
//           state: {
//             title: title,
//             id: listID,
//             token: token,
//           },
//         });
//         setTitle("Untitled");
//       });
//   };

//   return (
//     <CssVarsProvider>
//       <div>
//         <Button
//           startDecorator={<Add />}
//           variant="soft"
//           onClick={() => setPopUp(!isPopUp)}
//         >
//           Create New List
//         </Button>
//         {isPopUp && (
//           <div className="new-list-pop-up">
//             <div>
//               <Typography level="h2" component="h1">
//                 <b>Create New List</b>
//               </Typography>
//             </div>
//             <FormControl>
//               <Input
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Title.."
//               />
//               <Button variant="soft" onClick={handleSubmit}>
//                 {/* <Link
//               to="/Create"
//               className="submit-link"
//               path="relative"
//               state={{ title: title, listID: listID }}
//             >
//             </Link>
//             */}
//                 Submit
//               </Button>
//             </FormControl>
//             <Button variant="soft" onClick={() => setPopUp(!isPopUp)}>
//               Cancel
//             </Button>
//           </div>
//         )}
//       </div>
//     </CssVarsProvider>
//   );
// }

// function TextInput({ setTitle }) {
//   const [textInputField, setTextInputField] = useState("");
//   const handleText = (e) => {
//     e.preventDefault();
//     setTextInputField(e.target.value);
//     setTitle(e.target.value);
//   };
//   return (
//     <div className="text-customizer">
//       <div className="front-input">
//         <input
//           onChange={handleText}
//           value={textInputField}
//           placeholder="Enter Title..."
//         />
//       </div>
//     </div>
//   );
// }

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
