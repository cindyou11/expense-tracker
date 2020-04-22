import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { stub } from "sinon";
import AddExpenseFrom from "./AddExpenseForm";

Enzyme.configure({ adapter: new Adapter() });

describe("Add Expense Form Component", () => {
  test("renders", () => {
    const wrapper = shallow(<AddExpenseFrom />);
    expect(wrapper.exists()).toBe(true);
  });

  test("name input changes are reflected", () => {
    const wrapper = mount(<AddExpenseFrom addExpense={() => {}} />);
    wrapper.find("#name").hostNodes().simulate("change", {
      target: { name: "name", value: "Spotify Subscription" },
    });
    wrapper.update();
    expect(wrapper.find("#name").hostNodes().prop("value")).toEqual("Spotify Subscription");
  });

  test("addExpense called when form is submitted", () => {
    const addExpense = stub();
    const wrapper = mount(<AddExpenseFrom addExpense={addExpense} />);
    wrapper.find("#name").hostNodes().simulate("change", {
      target: { name: "name", value: "Spotify Subscription" },
    });
    wrapper.find("#cost").hostNodes().simulate("change", {
      target: { name: "cost", value: 9.99 },
    });
    wrapper.find("#category").hostNodes().simulate("change", {
      target: { name: "category", value: "Music" },
    });
    wrapper.update();
    wrapper.find("Form").simulate("submit");
    expect(addExpense.calledOnceWith({
        name: "Spotify Subscription",
        cost: 9.99,
        category: "Music",
      })
    ).toBe(true);
  });
});
