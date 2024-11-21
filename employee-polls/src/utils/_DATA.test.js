// The following two unit tests must be present for _saveQuestion():
const _saveQuestion = require("./_DATA")._saveQuestion;

describe("_saveQuestion", () => {
  // 1. An async unit test to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.
  it("should return the saved question with all expected fields", async () => {
    const author = "sarahedo";
    const question = {
      author: author,
      optionOneText: "optionOneText",
      optionTwoText: "optionTwoText",
    };
    const result = await _saveQuestion(question);
    //console.log(result);
    expect(result).not.toBe(null);
    // id
    expect(result).toHaveProperty("id");
    expect(result.id).not.toBe(null);
    expect(result.id.length).toBeLessThanOrEqual(26);
    // timestamp
    expect(result).toHaveProperty("timestamp");
    expect(result.timestamp).not.toBe(null);
    expect(typeof result.timestamp).toBe("number");
    expect(isNaN(new Date(result.timestamp))).toBe(false);
    // author
    expect(result).toHaveProperty("author");
    expect(result.author).toEqual(author);
    // optionOne
    expect(result).toHaveProperty("optionOne");
    expect(result.optionOne).toHaveProperty("votes");
    expect(result.optionOne.votes).toEqual([]);
    expect(result.optionOne).toHaveProperty("text");
    expect(result.optionOne.text).toEqual(question.optionOneText);
    // optionTwo
    expect(result).toHaveProperty("optionTwo");
    expect(result.optionTwo).toHaveProperty("votes");
    expect(result.optionTwo.votes).toEqual([]);
    expect(result.optionTwo).toHaveProperty("text");
  });

  // 2. An async unit test to verify that an error is returned if incorrect data is passed to the function.
  it("should reject if `author` is missing", async () => {
    const questionWithoutAuthor = {
      optionOneText: "optionOneText",
      optionTwoText: "optionTwoText",
    };

    await expect(_saveQuestion(questionWithoutAuthor)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("should reject if `optionOneText` is missing", async () => {
    const questionWithoutOptionOneText = {
      author: "sarahedo",
      optionTwoText: "optionTwoText",
    };

    await expect(_saveQuestion(questionWithoutOptionOneText)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("should reject if `optionTwoText` is missing", async () => {
    const questionWithoutOptionTwoText = {
      author: "sarahedo",
      optionOneText: "optionOneText",
    };

    await expect(_saveQuestion(questionWithoutOptionTwoText)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

// The following two unit tests must be present for _saveQuestionAnswer():
const _saveQuestionAnswer = require("./_DATA")._saveQuestionAnswer;

describe("_saveQuestionAnswer", () => {
  // 1. An async unit test to verify that true is returned when correctly formatted data is passed to the function.
  it("should return true when correctly formatted data is passed to the function", async () => {
    const authedUser = "sarahedo";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionOne";
    const result = await _saveQuestionAnswer({ authedUser, qid, answer });
    expect(result).toBe(true);
  });

  // 2. An async unit test to verify that an error is returned if incorrect data is passed to the function.
  it("should reject if `authedUser` is missing", async () => {
    const answerWithoutAuthedUser = {
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    await expect(_saveQuestionAnswer(answerWithoutAuthedUser)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });

  it("should reject if `qid` is missing", async () => {
    const answerWithoutQid = {
      authedUser: "sarahedo",
      answer: "optionOne",
    };
    await expect(_saveQuestionAnswer(answerWithoutQid)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });

  it("should reject if `answer` is missing", async () => {
    const answerWithoutAnswer = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
    };

    await expect(_saveQuestionAnswer(answerWithoutAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
