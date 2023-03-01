import { useState } from "react";
import axios from "axios";
//import Button from "@mui/joy/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export function ShowListItems({ items, token }) {
  const [state, setState] = useState({});

  const handleClick = (item) => {
    const newCheckBox = !item.check_box;

    console.log(item);
    axios.patch(
      `https://safe-plains-62725.herokuapp.com/items/${item.id}/`,
      {
        check_box: newCheckBox,
      },
      {
        headers: {
          authorization: `token ${token}`,
        },
      }
    );
  };

  return (
    <Box sx={{ mx: 3, display: "flex" }}>
      <FormGroup>
        {items.map((item) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={item.check_box}
                onChange={() => handleClick(item)}
              />
            }
            label={item.item}
          />
        ))}
      </FormGroup>
    </Box>
  );

  // return (
  //   <div>
  //     {items.map((item) => (
  //       <div className="item-entry">
  //         <Card orientation="horizontal">
  //           <Checkbox onClick={() => handleClick(item)}></Checkbox>
  //           <Typography key={item.id}>{item.item}</Typography>
  //         </Card>
  //       </div>
  //     ))}
  //   </div>
  // );
}
