import { useState } from "react";
import { connect } from "react-redux";
import QuestionSummary from "./QuestionSummary";
//import Question from "./Question";

const Dashboard = (props) => {
  const [showUnanswered, setShowUnanswered] = useState(true);

  return (
    <div className="dashboard">
      <div className="tabs">
        <button
          className={showUnanswered ? "active" : ""}
          onClick={() => setShowUnanswered(true)}
        >
          Unanswered
        </button>
        <button
          className={!showUnanswered ? "active" : ""}
          onClick={() => setShowUnanswered(false)}
        >
          Answered
        </button>
      </div>
      <div className="poll-list-area">
        {showUnanswered ? (
          <>
            <div className="header">
              <h2>Unanswered Polls</h2>
            </div>
            <div className="poll-list">
              {props.unansweredQuestions.map((question) => (
                <QuestionSummary key={question.id} question={question} />
                //<Question id={question.id} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="header">
              <h2>Answered Polls</h2>
            </div>
            <div className="poll-list">
              {props.answeredQuestions.map((question) => (
                <QuestionSummary key={question.id} question={question} />
                //<Question id={question.id} />
              ))}
            </div>
          </>
        )}
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
