import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function Pokecard({ name, img, onClick }) {
  return (
    <Card sx={{ width: "35%", margin: "1%" }}>
      <CardActionArea onClick={onClick}>
        <CardMedia sx={{ height: 120 }} image={img} title="pokemon" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
