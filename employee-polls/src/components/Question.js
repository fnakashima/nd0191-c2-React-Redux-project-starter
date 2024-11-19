import { connect } from "react-redux";

const Question = (props) => {
  console.log(props);
  return (
    <div className="center">
      <h2>Poll by {props.question.author.name}</h2>
      <div>
        <img
          className="avatar"
          src={props.question.author.avatarURL}
          alt={`Avatar of ${props.question.author.name}`}
        />
      </div>
      <h2>Would you rather...</h2>
      <div className="poll-options">
        <div>
          <p>{props.question.optionOne.text}</p>
          <button className="btn" onClick={() => console.log("Option One")}>
            Vote
          </button>
        </div>
        <div>
          <p>{props.question.optionTwo.text}</p>
          <button className="btn" onClick={() => console.log("Option Two")}>
            Vote
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
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

export default connect(mapStateToProps)(Question);
