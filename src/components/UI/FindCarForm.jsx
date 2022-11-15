import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup, Input } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
      <FormGroup className="form__group">
        <Input
      id="exampleSelect"
      name="select"
      type="select"
      >
      <option>
        India
      </option>
      <option>
        Nigeria
      </option>
      <option>
        South Africa
      </option>
      <option>
        Sri Lanka
      </option>
      <option>
        England
      </option>
    </Input>
    </FormGroup>
    <FormGroup className="form__group">
        <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        Pickup City
      </option>
      <option>
        Banglore
      </option>
      <option>
        Chennai
      </option>
      <option>
        Delhi
      </option>
      <option>
        Mumbai
      </option>
    </Input>
    </FormGroup>
    <FormGroup className="form__group">
        <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        Destination City
      </option>
      <option>
        Pune
      </option>
      <option>
        Ajanta
      </option>
      <option>
        Nagpur
      </option>
      <option>
        Nashik
      </option>
    </Input>
    </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="Pick up (city, district)" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="text" placeholder="Destination (city, district)" required />
        </FormGroup>
        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
        {/* <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup> */}

   
      </div>
    </Form>
  );
};

export default FindCarForm;
