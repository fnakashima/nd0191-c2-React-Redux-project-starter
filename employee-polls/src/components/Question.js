import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
  console.log(props);
  const question = props.question;
  if (question === null) {
    return <p>This question doesn't exist</p>;
  }

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
      <h2>Would you rather...</h2>
      <div className="poll-options">
        <div>
          <p>{question.optionOne.text}</p>
          <button className="btn" onClick={() => console.log("Option One")}>
            Vote
          </button>
        </div>
        <div>
          <p>{question.optionTwo.text}</p>
          <button className="btn" onClick={() => console.log("Option Two")}>
            Vote
          </button>
        </div>
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

  return {
    authedUser,
    question: {
      id: question.id,
      optionOne: question.optionOne,
      optionTwo: question.optionTwo,
      author: users[question.author],
    },
  };
};

export default withRouter(connect(mapStateToProps)(Question));
