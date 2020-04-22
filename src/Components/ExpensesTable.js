import React from "react";
import { Table, Card, Button } from "reactstrap";

function ExpensesTable(props) {
  const deleteExpense = (index) => {
    props.deleteExpense(index);
  };

  return (
    <Card className="text-center box-shadow border-color">
      {props.expenses.length > 0 ? (
        <Table className="mb-0" responsive hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {props.expenses.map((expense, index) => {
              return (
                <tr key={index}>
                  <td>{expense.name}</td>
                  <td>{expense.cost}</td>
                  <td>{expense.category}</td>
                  <td style={{ width: "200px" }}>
                    <Button className="delete-button " onClick={() => deleteExpense(index)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div className="m-5">
          Enter an expense in the form above to populate your expenses table!
        </div>
      )}
    </Card>
  );
}

export default ExpensesTable;
