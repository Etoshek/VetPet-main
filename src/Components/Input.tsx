import { TextField } from "@mui/material";
import React from "react";

interface InputProps {
  handleInputValue: any;
  animalValue: string | number | undefined;
  label: string;
}

const PacientInput = ({ handleInputValue, animalValue, label }: InputProps) => {
  return (
    <>
      <TextField
        label={label}
        type="text"
        variant="outlined"
        onChange={handleInputValue}
        value={animalValue}
      />
    </>
  );
};

export default PacientInput;
