import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface IFilter {
  lable: string | "";
}

const Filters: React.FC<IFilter> = ({ lable }) => {
  return (
    <div>
      <FormGroup
        style={{
          marginBottom: "-15px",
        }}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={<span className="filter">{lable}</span>}
        />
      </FormGroup>
    </div>
  );
};

export default Filters;
