//jshint esversion:6
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function InputArea() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [img, setImage] = useState("");

  const userData = {
    Fname: fname,
    Lname: lname,
    email: email,
    Number: number,
    img: img.name,
  };

  const handleSubmit = ()=>{
    axios
    .post("/users", userData)
    .then((response) => {
      console.log(response);
     
    })
    .catch((error) => {
      console.log(error);
    });
    alert("Data Submitted Successfully. Pls Check the data in the mongodb link provided in the Email");
  };
 
const handleChange = (e) => {
  if (e.target.files[0]) {
    setImage(e.target.files[0]);
  }
};
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter First Name"
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter Last Name"
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email id</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Enter Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            required
            placeholder="Enter Phone Number"
            onChange={(e) => {
              setnumber(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Upload you Image"
            name="img"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        
      </Form>
    </div>
  );
}

export default InputArea;

