import {
  Finalquizarray,
  Finalquizarrayanswers,
  Quizarray,
} from "../Types/Quiztypes";

export function modifyarray(qarray: Quizarray): Finalquizarray {
  const shufflearray = (
    array: Finalquizarrayanswers
  ): Finalquizarrayanswers => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  const currentarray = [...qarray];
  const newarr = currentarray.map((item, id) => {
    const incanswers = item.incorrect_answers.map((answer, answerid) => {
      return { answer: answer, id: answerid + 1, iscorrect: false };
    });
    const correctanswer = {
      answer: item.correct_answer,
      id: incanswers.length + 1,
      iscorrect: true,
    };
    return {
      question: item.question,
      answers: shufflearray([...incanswers, correctanswer]),
    };
  });
  return newarr;
}
