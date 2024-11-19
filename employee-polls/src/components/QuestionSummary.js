import { formatDate } from "../utils/helpers";

const QuestionSummary = ({ question }) => {
  return (
    <div className="poll-list-item" key={question.id}>
      <div className="author">{question.author}</div>
      <div>{formatDate(question.timestamp)}</div>
      <div className="btn-area">
        <button className="btn">Show</button>
      </div>
    </div>
  );
};

export default QuestionSummary;
