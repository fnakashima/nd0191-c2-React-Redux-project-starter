export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export default function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
