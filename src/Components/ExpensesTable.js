import React from "react";
import { Table, Card, Button } from "reactstrap";

function ExpensesTable(props) {
  const deleteExpense = (expense) => {
    props.deleteExpense(expense);
  };

  return (
    <Card className="text-center">
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
            {props.expenses.reverse().map((expense) => {
              return (
                <tr>
                  <td>{expense.name}</td>
                  <td>{expense.cost}</td>
                  <td>{expense.category}</td>
                  <td style={{ width: "200px" }}>
                    <Button
                      color="danger"
                      onClick={() => deleteExpense(expense)}
                    >
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
