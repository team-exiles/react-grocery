import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Button } from "@mui/material";

export const ListDetails = ({ list, token }) => {
  return (
    <Link
      to={`/lists/edit/${list.id}/`}
      path="relative"
      state={{ title: list.title, id: list.id, token: token }}
    >
      <Button fullWidth sx={{ mb: 2 }} color="primary" variant="contained">
        <Typography key={list.id} variant="h7" sx={{ justifyItems: "left" }}>
          <FormatListBulletedIcon
            sx={{ verticalAlign: "middle" }}
            fontSize="small"
          />
          {list.title}
        </Typography>
      </Button>
    </Link>
  );
};
