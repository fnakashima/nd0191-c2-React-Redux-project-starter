import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";
import { refreshUsers } from "../actions/users";
import QuestionOption from "./QuestionOption";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
  return ComponentWithRouterProp;
};

const Question = (props) => {
  //console.log(props);
  const navigate = useNavigate();
  const { dispatch, authedUser, answered, question } = props;
  if (question === null) {
    navigate("/404");
    return null;
  }

  const handleVote = (option) => {
    //console.log("handleVote", option);
    dispatch(handleAnswerQuestion(question.id, option));
    dispatch(refreshUsers());
    // Refresh the page to show the results
    navigate(`/question/${question.id}`);
  };

  return (
    <div className="center">
      <h2>Poll by {question.author.name}</h2>
      <div>
        <img
          className="avatar"
          src={question.author.avatarURL}
          alt={`Avatar of ${question.author.name}`}
        />
      </div>
      <h2>Would You Rather</h2>
      <div className="poll-options">
        <QuestionOption
          authedUser={authedUser}
          option={question.optionOne}
          answered={answered}
          handleVote={handleVote}
        />
        <QuestionOption
          authedUser={authedUser}
          option={question.optionTwo}
          answered={answered}
          handleVote={handleVote}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { id } = props.router.params;
  const question = questions ? questions[id] : null;
  if (!question) {
    return {
      authedUser,
      question: null, // return null if question doesn't exist
    };
  }
  const answered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  return {
    authedUser,
    answered,
    question: {
      id: question.id,
      optionOne: {
        ...question.optionOne,
        key: "optionOne",
        isVoted: question.optionOne.votes.includes(authedUser),
        percentage:
          totalVotes !== 0
            ? Math.round((optionOneVotes / totalVotes) * 100)
            : 0,
      },
      optionTwo: {
        ...question.optionTwo,
        key: "optionTwo",
        isVoted: question.optionTwo.votes.includes(authedUser),
        percentage:
          totalVotes !== 0
            ? Math.round((optionTwoVotes / totalVotes) * 100)
            : 0,
      },
      author: users[question.author],
    },
  };
};

export default withRouter(connect(mapStateToProps)(Question));
