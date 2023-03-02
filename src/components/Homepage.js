import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import { requestMyLists } from "./Requests";
import { ListDetails } from "./ListDetails";
import { useEffect, useState } from "react";
import CreateList from "./CreateList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from '@mui/icons-material/Logout';


export const Homepage = ({ setUser, token }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    requestMyLists(token).then((res) => {
      setLists(res.data);
    });
  }, [token]);

  return (
    <section className="homepage">
      <Typography variant="h4" align="center">Forgot Milk?</Typography>
      <Divider sx={{ m: 2 }} />
      <div className="active-lists">
        {lists.map((list) => (
          <Card variant="outlined"
          sx={{
            p:2,
            m:2,
          }}
          
          >
            <ListDetails list={list} token={token} />
          </Card>
        ))}
        <Divider sx={{ m: 2 }} />
        {/* <div className="archived-folder">
          <span className="material-symbols-outlined">
            <Link to="/Archives">folder</Link>
          </span>
          <span>Archived</span>
          <ExpandedFolder />
        </div> */}
      </div>
      <div>
        <IconButton
        sx={{ position: "absolute", top: 10, left: 10 }}
        >
          <Link
            component={RouterLink}
            to="/Login"
            onClick={() => setUser(null)}>
          <LogoutIcon />
          </Link>
        </IconButton>
        {/* </Fab> */}
      </div>

      <CreateList token={token} />
    </section>
  );
};

/* function NewListPopUp({ token }) {
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

   return (
      <div>
        <Button
          variant="solid"
          onClick={() => setPopUp(!isPopUp)}
        >
          Create New List
        </Button>
        {isPopUp && (
          <div className="new-list-pop-up">
            <div className="title">
              <h1>New List Title?</h1>
            </div>
            <br />
            <br />
            <TextInput setTitle={setTitle} />
            <button
              className="cancel-button"
              onClick={() => setPopUp(!isPopUp)}
            >
              Cancel
            </button>
            <button className="submit-button" onClick={handleSubmit}>
              * <Link
              to="/Create"
              className="submit-link"
              path="relative"
              state={{ title: title, listID: listID }}
            > 
            </Link>
            *
              Submit
            </button>
          </div>
        )}
      </div>
 // ); 
// */

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
