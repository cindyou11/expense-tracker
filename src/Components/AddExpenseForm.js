import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

function AddExpenseForm(props) {

    const[form, setValues] = useState({
        name: '',
        cost: '',
        category: ''
    })

    const onChange = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();

        const expense = {
            name: form.name,
            cost: form.cost,
            category: form.category
        }
        props.addExpense(expense)

        setValues({
            name: '',
            cost: '',
            category: ''
        })
    }

    return (
        <Card className="p-5 text-center">
            <Form onSubmit={submitForm} inline>
                <FormGroup className="mr-5">
                    <Label for="name" className="mr-3">Name:</Label>
                    <Input type="text" name="name" id="name" onChange={onChange} value={form.name}  placeholder="Spotify Subscription" required/>
                </FormGroup>
                <FormGroup className="mr-5">
                    <Label for="cost" className="mr-3">Cost:</Label>
                    <Input type="number" step="0.01" name="cost" id="cost" onChange={onChange} value={form.cost}  placeholder="9.99" required/>
                </FormGroup>
                <FormGroup className="mr-5">
                    <Label for="category" className="mr-3">Category:</Label>
                    <Input type="text" name="category" id="category" onChange={onChange} value={form.category}  placeholder="Music" required/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </Card>
    )
}

export default AddExpenseForm