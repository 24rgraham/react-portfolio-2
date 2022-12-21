import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import {
//     BrowserRouter as router, redirect,
//   } from "react-router-dom";

function BasicExample() {
  return (
    <div className='spacer'>
    <div className='containForm'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Leave Me a Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button variant="primary" type="submit" href='/'>
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default BasicExample;