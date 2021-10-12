import React from "react";
import PropTypes from "prop-types";
import CardImage from "./CardImage";
import { Grid } from "@mui/material";
import useGetGifts from "../hooks/useGetGifts";

function GifGrid({ category }) {
  const { data: images, loading } = useGetGifts(category);

  return (
    <React.Fragment>
      {loading && "Cargando... "}
      <h3>Categories {category} </h3>
      <Grid container spacing={2}>
        {images.map((img) => (
          <Grid item md={2} key={`grid-${img.id}`}>
            <CardImage {...img} key={img.id} category={category} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string,
};

export default GifGrid;
