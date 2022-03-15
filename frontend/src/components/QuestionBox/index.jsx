import React from 'react'
import PropTypes from 'prop-types';

const QuestionBox = ({ title, alternatives, handleSelectedOption }) => {
  return (
    <div>
        {title}
        {alternatives.map((alternative, index) => (
          <div key={index} onClick={() => handleSelectedOption(alternative)}>
            {alternative}
          </div>
        ))}
    </div>
  )
}

QuestionBox.defaultProps = {
  alternatives: [],
  handleSelectedOption: () => {}
};

QuestionBox.propTypes = {
  title: PropTypes.string.isRequired,
  alternatives: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectedOption: PropTypes.func
}

export default QuestionBox