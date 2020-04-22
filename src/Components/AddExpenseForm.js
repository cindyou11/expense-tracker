import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

function AddExpenseForm(props) {
  const [expenseForm, setExpenseFormValues] = useState({
    name: "",
    cost: "",
    category: ""
  });

  const onChange = (e) => {
    setExpenseFormValues({
      ...expenseForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    props.addExpense(expenseForm);

    setExpenseFormValues({
      name: "",
      cost: "",
      category: ""
    });
  };

  return (
    <Card className="p-5 text-center mb-5 box-shadow border-color">
      <Form onSubmit={submitForm} inline>
        <FormGroup className="mr-5">
          <Label for="name" className="mr-3">
            Name:
          </Label>
          <Input
            className="border-color"
            type="text"
            name="name"
            id="name"
            onChange={onChange}
            value={expenseForm.name}
            placeholder="Spotify Subscription"
            required
          />
        </FormGroup>
        <FormGroup className="mr-5">
          <Label for="cost" className="mr-3">
            Cost:
          </Label>
          <Input
            className="border-color"
            type="number"
            min="0.01"
            step="0.01"
            name="cost"
            id="cost"
            onChange={onChange}
            value={expenseForm.cost}
            placeholder="9.99"
            required
          />
        </FormGroup>
        <FormGroup className="mr-5">
          <Label for="category" className="mr-3">
            Category:
          </Label>
          <Input
            className="border-color"
            type="text"
            name="category"
            id="category"
            onChange={onChange}
            value={expenseForm.category}
            placeholder="Music"
            required
          />
        </FormGroup>
        <Button className="submit-button">Submit</Button>
      </Form>
    </Card>
  );
}

export default AddExpenseForm;
