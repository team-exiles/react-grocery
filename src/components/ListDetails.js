import { Link } from "react-router-dom";
// import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Button } from "@mui/material";

export const ListDetails = ({ list, token, username }) => {
  return (
    <Link
      to={`/lists/edit/${list.id}/`}
      path="relative"
      style={{ textDecoration: "none" }}
      state={{
        //title: list.title,
        //id: list.id,
        token: token,
        username: username,
        //archiveStatus: list.archived,
      }}
    >
      <Button
        sx={{
          // mb: 2,
          textAlign: "left",

          //justifyContent: "flex-start",
          vericalAlign: "center",
          border: "none",
          // display: "flex",
          //borderRadius: 28,
          color: "black",
        }}
        variant="outlined"
        // startIcon={<FormatListBulletedIcon />}
        key={list.id}
        startIcon={<DoubleArrowIcon />}
      >
        <Typography
          sx={{
            justifyText: "left",
            mt: 0.56,
            // fontWeight: "bolder",
            fontSize: "18px",
            fontWeight: "700",
            fontFamily: "Montserrat",
          }}
        >
          {list.title}
        </Typography>
        <div className="dot-width" />
        {list.active_shopping ? (
          // <FiberManualRecordIcon
          //   color="success"
          //   className="blink"
          //   fontSize="small"
          // />
          <Button color="success" size="small" className="blink">
            <strong style={{ fontSize: "15px" }}>Live</strong>
          </Button>
        ) : null}
      </Button>
    </Link>
  );
};
