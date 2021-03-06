import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material";

const AddCategory = ({ setCategories }) => {
  const [errorText, setErrorText] = useState(false);
  const [value, setValue] = useState("");

  const handleAddCategorie = (e) => {
    e.preventDefault();
    if (value.length) {
      console.log("Algo cambio ", value);
      setCategories((catego) => {
        if (!catego.includes(value)) {
          return [value, ...catego];
        } else {
          setErrorText(true);
          console.log("Elemento ya fue agregado");
          return catego;
        }
      });
      setValue("");
    }
  };

  const handleInputChange = (e) => {
    e.target.value.length && setErrorText(false);
    setValue(e.target.value);
  };
  return (
    <React.Fragment>
      <h2 id="subtitle">Add category</h2>
      <form onSubmit={handleAddCategorie}>
        <div className="newCategoryForm">
          <TextField
            className="inputCategory"
            required
            error={errorText}
            id="outlined-required"
            label="Add Category"
            value={value}
            onChange={handleInputChange}
            size="small"
          />
          {errorText && <label className="labelError">El elemento ya fue agregado</label>}
        </div>
        <p>{value}</p>
        <Button id="btnAddCategory" type="submit" variant="outlined" size="medium" disabled={!value.length}>
          Add
        </Button>
      </form>
    </React.Fragment>
  );
};

AddCategory.propType = {
  handleNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;
