import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@material-ui/core";

const MultipleChoiceQuestionBox = ({
  title,
  alternatives,
  handleSubmit,
}) => {

  const [checkboxesOptions, setCheckboxesOptions] = useState([])

  useEffect(()=>{
    if (!Array.isArray(alternatives))
      return

    const checkboxesState = alternatives.map(alternative=>{
      return {
        name: `checkbox-${alternative}`,
        label: alternative,
        isChecked: false,
      }
    })
    setCheckboxesOptions(checkboxesState)
  },[alternatives])

  const handleCheckboxChange = (selected, index) => {
    const checkboxesNewState = JSON.parse(JSON.stringify(checkboxesOptions)); // TODO: change this deep clone operation with the Lodash method
    checkboxesNewState[index].isChecked = selected.target.checked
    setCheckboxesOptions(checkboxesNewState)
  }

  const getSelectedOptions = () => {
    const selectedOptions = checkboxesOptions.filter(option => option.isChecked === true).map(option => option.label)
    return { 
      selectedOptions
    }
  }

  return (
    <Container data-testid='multiple-question-container'>
      <Typography>Selecione todas que se aplicam</Typography>
      <Typography variant="h3" component="h1">
        {title}
      </Typography>
      {checkboxesOptions.map((checkboxOption, index) => (
          <FormGroup row key={index}>
            <FormControlLabel
              label={checkboxOption.label} 
              control={
                <Checkbox
                  checked={checkboxOption.isChecked}
                  onChange={(e) => handleCheckboxChange(e, index)}
                  name={checkboxOption.name}
                  data-testid={checkboxOption.name}
                  color="primary"
                />
              }
            />
          </FormGroup>
        ))}
      <Button onClick={() => handleSubmit(getSelectedOptions())}>Próxima pergunta</Button>
    </Container>
  );
};

MultipleChoiceQuestionBox.defaultProps = {
  handleSubmit: () => {}
};

MultipleChoiceQuestionBox.propTypes = {
  title: PropTypes.string.isRequired,
  alternatives: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func
}

export default MultipleChoiceQuestionBox;
