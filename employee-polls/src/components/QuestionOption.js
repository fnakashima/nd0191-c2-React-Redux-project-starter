const QuestionOption = ({ option, answered, handleVote }) => {
  const handleAnswer = (e) => {
    e.preventDefault();
    handleVote(option.key);
  };

  const optionClass = option.isVoted ? "option voted" : "option";
  return (
    <div className={optionClass}>
      <p className="option-label">
        {option.text} {option.isVoted && <span>✔️</span>}
      </p>
      {!answered && (
        <button className="btn" onClick={handleAnswer}>
          Vote
        </button>
      )}
      {answered && (
        <div>
          <p>{option.votes.length} votes</p>
          <p>{option.percentage}%</p>
        </div>
      )}
    </div>
  );
};

export default QuestionOption;
