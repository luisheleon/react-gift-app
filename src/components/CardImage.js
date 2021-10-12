import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "animate.css";

export default function MediaCard({ id, title, url }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="animate__animated animate__fadeIn">
      <CardMedia component="img" height="140" image={url} alt={id + title} />
      <CardContent className="cardTitle">
        <Typography gutterBottom variant="caption" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
