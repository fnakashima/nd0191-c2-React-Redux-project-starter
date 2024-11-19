import { connect } from "react-redux";
import QuestionSummary from "./QuestionSummary";
import Question from "./Question";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <div className="poll-list-area">
        <div className="header">
          <h2>Unanswered Polls</h2>
        </div>
        <div className="poll-list">
          {props.unansweredQuestions.map((question) => (
            <QuestionSummary question={question} />
            //<Question id={question.id} />
          ))}
        </div>
      </div>
      <div className="poll-list-area">
        <div className="header">
          <h2>Answered Polls</h2>
        </div>
        <div className="poll-list">
          {props.answeredQuestions.map((question) => (
            <QuestionSummary question={question} />
            //<Question id={question.id} />
          ))}
        </div>
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
