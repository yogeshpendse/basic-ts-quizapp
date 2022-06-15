export type Arrayitem = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type Quizarray = Arrayitem[];
export type Quizanswers = { answer: string; id: number; iscorrect: boolean };
export type Finalquizarrayanswers = Quizanswers[];
export type Finalquizarrayitems = {
  question: string;
  answers: Finalquizarrayanswers;
};
export type Finalquizarray = Finalquizarrayitems[];
