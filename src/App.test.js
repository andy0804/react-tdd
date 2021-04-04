import App from "./App";
import React from "react";
import { Counter } from "./Counter";

import { mount, shallow } from "enzyme";
describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    // wrapper = shallow(<Counter />);
    // full dom testing
    wrapper = mount(<App />);
  });
  test("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is a counter app");
  });
  test("render a button with text of `increment` ", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("increment");
  });
  test("render intial value of state in a div` ", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("render the click event of increment button and incrment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });
  test("render the click event of decrement  button and decrement  counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("render the click event of decrement button and ensure the counter value is NEVER NEGATIVE", () => {
    wrapper.find("#increment-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("render the click event of increment button and ensure the counter valur is lesser than 30", () => {
    // Cache original functionality
    let clicks = 0;
    while (clicks < 31) {
      wrapper.find("#increment-btn").simulate("click");
      clicks++;
    }
    expect(wrapper.find("#counter-value").text()).toBe("29");
  });
});
