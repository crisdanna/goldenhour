import MultipleChoiceQuestionBox from "components/MultipleChoiceQuestionBox";
import React, { useEffect, useState } from "react";
import { getSymptoms } from "services/api";

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
      //throw new Error("Erro ao carregar perguntas");
    } 
  };

  useEffect(() => {
    getQuestions();
  }, []);
  
  return (
    <>
      {currentQuestion && currentQuestion.multipleChoiceQuestion && (
        <MultipleChoiceQuestionBox
          title={currentQuestion.title}
          alternatives={currentQuestion.alternatives}
        />
      )}
    </>
  );
};

export default QuestionList;
