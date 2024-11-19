import { formatDate } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const QuestionSummary = ({ question }) => {
  const navigate = useNavigate();

  const toDetail = (e, id) => {
    e.preventDefault();
    navigate(`/question/${id}`);
  };

  return (
    <div className="poll-list-item" key={question.id}>
      <div className="author">{question.author}</div>
      <div>{formatDate(question.timestamp)}</div>
      <div className="btn-area">
        <button className="btn" onClick={(e) => toDetail(e, question.id)}>
          Show
        </button>
      </div>
    </div>
  );
};

export default QuestionSummary;
