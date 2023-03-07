import { Link } from "react-router-dom";
// import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Button } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const ListDetails = ({ list, token }) => {
  return (
    <Link
      to={`/lists/edit/${list.id}/`}
      path="relative"
      state={{
        //title: list.title,
        //id: list.id,
        token: token,
        //archiveStatus: list.archived,
      }}
    >
      <Button
        fullWidth
        sx={{
          mb: 2,
          justifyContent: "flex-start",
          vericalAlign: "center",
          border: "2px solid",
          display: "flex",
        }}
        color="primary"
        variant="outlined"
        startIcon={<FormatListBulletedIcon />}
        key={list.id}
      >
        <Typography sx={{ mt: 0.56, fontWeight: "bolder" }}>
          {list.title}
        </Typography>
        <div className="dot-width" />
        {list.active_shopping ? (
          <FiberManualRecordIcon
            color="success"
            className="blink"
            fontSize="small"
          />
        ) : null}
      </Button>
    </Link>
  );
};
