import { shallow, mount } from "enzyme";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopBarDatePicker from "../components/TopBarDatePicker/TopBarDatePicker.js";

const clickFn = jest.fn();

describe("TopBarDatePicker", () => {
  it("should render correctly", () => {
    shallow(<TopBarDatePicker />);
  });

  it("icon click should open date picker", async () => {
    const component = shallow(<TopBarDatePicker />);
    component.find("#calenderIconBtn").simulate("click");
    //I don't know if this line is appropriate to use but it is doing what I need to
    //so fuck it, i already spent 3 hours on this shit
    expect(
      component
        .children("*")
        .find("MuiPickersUtilsProvider")
        .children("*")
        .props().open
    ).toBeTruthy();
  });
});
