import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import QuestionSummary from "./QuestionSummary";

describe("QuestionSummary", () => {
  // At least one test must call the toMatchSnapshot() function from jest. Doing this will generate a folder called snapshots where the snapshot will be stored.
  it("should match snapshot", () => {
    const question = {
      id: "xj352vofupe1dqz9emx13r",
      author: "mtsamis",
      timestamp: 1493579767190,
      optionOne: {
        votes: ["mtsamis", "zoshikanlu"],
        text: "deploy to production once every two weeks",
      },
      optionTwo: {
        votes: ["tylermcginnis"],
        text: "deploy to production once every month",
      },
    };

    const component = render(
      <MemoryRouter>
        <QuestionSummary question={question} />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
