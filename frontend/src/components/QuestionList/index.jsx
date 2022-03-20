import MultipleChoiceQuestionBox from "components/MultipleChoiceQuestionBox";
import SingleChoiceQuestionBox from "components/SingleChoiceQuestionBox";
import React, { useEffect, useState } from "react";
import { getSymptoms, postInitialSymptoms } from "services/api";

const QuestionList = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const getQuestions = async () => {
    let res = null;
    try {
      res = await getSymptoms();
      setCurrentQuestion(res.data);
    } catch (e) {
      console.log("error", e.message);
      // TODO: change it to a toast notification
      throw new Error("Erro ao carregar perguntas");
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const handleSubmitMultipleChoiceQuestionResponse = async (response) => {
    try {
      await postInitialSymptoms({ data: response });
      //TODO: go to the next question
    } catch (e) {
      //TODO: show notification
    }
  };

  const handleSubmitSingleChoiceQuestionResponse = async (response) => {
    try {
      await postInitialSymptoms({ data: response });
      //TODO: go to the next question
    } catch (e) {
      //TODO: show notification
    }
  };

  return (
    <>
      {currentQuestion &&
        (currentQuestion.multipleChoiceQuestion ? (
          <MultipleChoiceQuestionBox
            title={currentQuestion.title}
            alternatives={currentQuestion.alternatives}
            handleSubmit={handleSubmitMultipleChoiceQuestionResponse}
          />
        ) : (
          <SingleChoiceQuestionBox
            title={currentQuestion.title}
            alternatives={currentQuestion.alternatives}
            handleSelectedOption={handleSubmitSingleChoiceQuestionResponse}
          />
        ))}
    </>
  );
};

export default QuestionList;
