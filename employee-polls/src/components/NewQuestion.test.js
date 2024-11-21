import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import NewQuestion from "./NewQuestion";

const mockStore = configureStore();
const store = mockStore({});
// At least one unit test must use the render method from @testing-library/react to render one of your React components. The unit test should then perform some actions on the component using fireEvent such as fireEvent.click() or fireEvent.change(). After calling fireEvent, call the expect() method from jest to verify that a change occurred in the UI after the event was fired.
describe("NewQuestion", () => {
  it("should match snapshot", () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <NewQuestion />
        </MemoryRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("should update the input value when the user types", () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <NewQuestion />
        </MemoryRouter>
      </Provider>
    );

    const inputOne = component.getByTestId("option-one");
    const inputTwo = component.getByTestId("option-two");

    const inputOneText = "Option One";
    const inputTwoText = "Option Two";
    fireEvent.change(inputOne, { target: { value: inputOneText } });
    fireEvent.change(inputTwo, { target: { value: inputTwoText } });

    expect(inputOne.value).toEqual(inputOneText);
    expect(inputTwo.value).toEqual(inputTwoText);
  });
});
