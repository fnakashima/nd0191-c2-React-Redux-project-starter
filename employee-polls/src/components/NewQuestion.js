import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

const NewQuestion = ({ dispatch }) => {
  const navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    if (name === "optionOne") {
      setOptionOne(value);
    } else {
      setOptionTwo(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("submit: ", optionOne, optionTwo);

    dispatch(handleAddQuestion(optionOne, optionTwo));

    setOptionOne("");
    setOptionTwo("");

    navigate("/");
  };

  return (
    <div className="new-poll">
      <h2>Would You Rather</h2>
      <label>Create Your Own Poll</label>
      <form onSubmit={handleSubmit}>
        <label>First Option</label>
        <input
          type="text"
          name="optionOne"
          placeholder="Enter Option One Text Here"
          onChange={handleChange}
        />
        <label>Second Option</label>
        <input
          type="text"
          name="optionTwo"
          placeholder="Enter Option Two Text Here"
          onChange={handleChange}
        />
        <button
          className="btn"
          type="submit"
          disabled={
            optionOne === "" ||
            optionOne.trim() === "" ||
            optionTwo === "" ||
            optionTwo.trim() === ""
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewQuestion);
