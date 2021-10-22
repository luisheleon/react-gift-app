import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import GifGrid from "./components/GifGrid";

function App({ defaultCategory = ["avatar", "goku"] }) {
  const [categories, setCategories] = useState(defaultCategory);

  return (
    <React.Fragment>
      <CssBaseline />
      <h1 id="title">GifExpertApp</h1>

      <hr />

      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </React.Fragment>
  );
}

export default App;
