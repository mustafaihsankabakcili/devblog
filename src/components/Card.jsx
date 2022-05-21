import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { Avatar, CardActions, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ ...blog }) {
  const navigate = useNavigate();
  const {
    displayName,
    date,
    title,
    photoURL,
    imgUrl,
    content,
    id,
    comments,
    likes,
  } = blog;

  
  let commentsNum = JSON.parse(comments).length;
  let likesNum = JSON.parse(likes).length;



  const navigateDetails = () => {
    navigate(`/devblog/details/${id}`, { state: { blog } });
  };

  return (
    <Card
      sx={{
        width: 325,
        minWidth: 325,
        height: 475,
        bgcolor: "#FFFFFF",
        borderRadius: "20px",
        padding: "15px",
        border: "5px solid silver",
        cursor: "pointer",
      }}
      onClick={navigateDetails}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "black", position: "static" }}
            aria-label="recipe"
          >
            {photoURL ? (
              <img src={photoURL} alt="photoURL" style={{ width: "40px" }} />
            ) : (
              displayName[0]
            )}
          </Avatar>
        }
        title={displayName}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        style={{ border: "5px solid silver", borderRadius: "15px", width: '100%', height: '200px' }}
        image={imgUrl}
        alt="blog_photo"
      />
      <CardContent style={{width: '100%', height: '120px'}}>
        <h3>{title}</h3>
        <Typography variant="body2" color="text.secondary">
          {content.substring(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton
          aria-label="add to favorites"
          disableRipple
          sx={{position: 'static', color: "#E7007E" }}
        >
          <FavoriteIcon />
        </IconButton>
        <p>{likesNum}</p>
        <IconButton
          aria-label="comment"
          disableRipple
          sx={{position: 'static', color: "#E7007E" }}
        >
          <ModeCommentIcon />
        </IconButton>
        <p>{commentsNum}</p>
      </CardActions>
    </Card>
  );
}
