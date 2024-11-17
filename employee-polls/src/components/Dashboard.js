import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

const Dashboard = (props) => {
  return (
    <div>
      <div>
        <h2>Unanswered Polls</h2>
        <ul>
          {props.unansweredQuestions.map((question) => (
            <li key={question.id}>
              <div>
                <div>{question.author}</div>
                <div>{formatDate(question.timestamp)}</div>
                <div>
                  <button>Show</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Answered Polls</h2>
        <ul>
          {props.answeredQuestions.map((question) => (
            <li key={question.id}>
              <div>
                <div>{question.author}</div>
                <div>{formatDate(question.timestamp)}</div>
                <div>
                  <button>Show</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => {
  return {
    authedUser,
    answeredQuestions:
      questions === null
        ? []
        : Object.values(questions)
            .filter(
              (question) =>
                question.optionOne.votes.includes(authedUser) ||
                question.optionTwo.votes.includes(authedUser)
            )
            .sort((a, b) => b.timestamp - a.timestamp),
    unansweredQuestions:
      questions === null
        ? []
        : Object.values(questions)
            .filter(
              (question) =>
                !question.optionOne.votes.includes(authedUser) &&
                !question.optionTwo.votes.includes(authedUser)
            )
            .sort((a, b) => b.timestamp - a.timestamp),
  };
};

export default connect(mapStateToProps)(Dashboard);
