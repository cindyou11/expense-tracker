import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { stub } from "sinon";
import ExpensesTable from "./ExpensesTable";

Enzyme.configure({ adapter: new Adapter() });

const mockExpense1 = {
  name: "Spotify Subscription",
  cost: "9.99",
  category: "Music",
};

const mockExpense2 = {
  name: "Spotify Subscription",
  cost: "9.99",
  category: "Music",
};

describe("Expense Table Component", () => {
  test("renders", () => {
    const wrapper = shallow(<ExpensesTable expenses={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("Text renders instead of table when there are no expenses", () => {
    const wrapper = shallow(<ExpensesTable expenses={[]} deleteExpense={() => {}} />);
    expect(wrapper.find("div").text()).toEqual("Enter an expense in the form above to populate your expenses table!");
  });

  test("Table renders when there are expenses", () => {
    const wrapper = mount(<ExpensesTable expenses={[mockExpense1]} />);
    const row = wrapper.find("Table").find("tbody").find("tr");
    expect(row.length).toBe(1);
    const rowValues = row.find("td").map(val => val.text())
    expect(rowValues[0]).toEqual(mockExpense1.name);
    expect(rowValues[1]).toEqual(mockExpense1.cost);
    expect(rowValues[2]).toEqual(mockExpense1.category);
  });

  test("Delete expense called when button clicked", () => {
    const deleteExpense = stub();
    const wrapper = mount(<ExpensesTable expenses={[mockExpense1, mockExpense2]} deleteExpense={deleteExpense} />);
    expect(wrapper.find("Table").find("tbody").find("tr").length).toBe(2);
    wrapper.find("Button").first().simulate("click");
    expect(deleteExpense.calledOnceWith(0)).toBe(true);
  });
});
