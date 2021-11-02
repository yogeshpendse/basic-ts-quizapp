export type Option = {
  opid: number;
  option: string;
  iscorrect: boolean;
};
export type Question = {
  id: string;
  question: string;
  options: Option[];
};
export type Quiztype = {
  questionaraay: Question[];
};
