import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

const IntensityInput = ({ onChange, ...rest }) => {
    const [checkedOption, setCheckedOption] = useState(null);
  
    const handleRadioChange = (e) => {
      setCheckedOption(e.target.name);
      if (onChange) onChange({ selectedOption: e.target.name });
    };
    return (
      <div {...rest}>
        <FormControlLabel
          onChange={handleRadioChange}
          style={{ marginRight: 10 }}
          control={
            <Checkbox
              color="primary"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              checked={parseInt(checkedOption || 0) >= 1}
              name="1"
            />
          }
        />
        <FormControlLabel
          onChange={handleRadioChange}
          style={{ marginRight: 10 }}
          control={
            <Checkbox
              color="primary"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              checked={parseInt(checkedOption || 0) >= 2}
              name="2"
            />
          }
        />
        <FormControlLabel
          onChange={handleRadioChange}
          style={{ marginRight: 10 }}
          control={
            <Checkbox
              color="primary"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              checked={parseInt(checkedOption || 0) >= 3}
              name="3"
            />
          }
        />
        <FormControlLabel
          onChange={handleRadioChange}
          style={{ marginRight: 10 }}
          control={
            <Checkbox
              color="primary"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              checked={parseInt(checkedOption || 0) >= 4}
              name="4"
            />
          }
        />
        <FormControlLabel
          onChange={handleRadioChange}
          style={{ marginRight: 10 }}
          control={
            <Checkbox
              color="primary"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              checked={parseInt(checkedOption || 0) >= 5}
              name="5"
            />
          }
        />
        <FormControlLabel
          onChange={handleRadioChange}
          style={{ marginRight: 10 }}
          control={
            <Checkbox
              color="primary"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              checked={parseInt(checkedOption || 0) >= 6}
              name="6"
            />
          }
        />
        <FormControlLabel
          onChange={handleRadioChange}
          style={{ marginRight: 10 }}
          control={
            <Checkbox
              color="primary"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              checked={parseInt(checkedOption || 0) >= 7}
              name="7"
            />
          }
        />
        <FormControlLabel
          onChange={handleRadioChange}
          style={{ marginRight: 10 }}
          control={
            <Checkbox
              color="primary"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              checked={parseInt(checkedOption || 0) >= 8}
              name="8"
            />
          }
        />
        <FormControlLabel
          onChange={handleRadioChange}
          style={{ marginRight: 10 }}
          control={
            <Checkbox
              color="primary"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              checked={parseInt(checkedOption || 0) >= 9}
              name="9"
            />
          }
        />
        <FormControlLabel
          onChange={handleRadioChange}
          style={{ marginRight: 10 }}
          control={
            <Checkbox
              color="primary"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              checked={parseInt(checkedOption || 0) >= 10}
              name="10"
            />
          }
        />
      </div>
    );
  };

export default IntensityInput