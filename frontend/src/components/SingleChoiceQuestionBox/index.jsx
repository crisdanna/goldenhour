import React from 'react'
import PropTypes from 'prop-types';
import { Button, Container, Typography } from '@material-ui/core'

const SingleChoiceQuestionBox = ({ title, alternatives, handleSelectedOption }) => {
  return (
    <Container>
      <Typography  variant="h3" component="h1"> 
      {title}
      </Typography>
        {alternatives.map((alternative, index) => (
          <Button key={index} onClick={() => handleSelectedOption(alternative)} color="primary">
          {alternative}
          </Button>
        ))}
    </Container>
  )
}

SingleChoiceQuestionBox.defaultProps = {
  alternatives: [],
  handleSelectedOption: () => {}
};

SingleChoiceQuestionBox.propTypes = {
  title: PropTypes.string.isRequired,
  alternatives: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectedOption: PropTypes.func
}

export default SingleChoiceQuestionBox