import React from 'react'
import PropTypes from 'prop-types';

const QuestionBox = ({ title, alternatives }) => {
  return (
    <div>
        {title}
        {alternatives.map((alternative, index) => (
          <div key={index}>
            {alternative}
          </div>
        ))}
    </div>
  )
}

QuestionBox.defaultProps = {
  alternatives: []
};

QuestionBox.propTypes = {
  title: PropTypes.string.isRequired,
  alternatives: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default QuestionBox