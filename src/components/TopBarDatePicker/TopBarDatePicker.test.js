import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { render, fireEvent } from "react-testing-library";
import React from "react";
import TopBarDatePicker from "./TopBarDatePicker.js";

configure({ adapter: new Adapter() });

describe("<TopBarDatePicker /> with no props", () => {
  it("should render properly", () => {
    const tree = renderer.create(<TopBarDatePicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
