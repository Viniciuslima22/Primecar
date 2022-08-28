import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="A partir do endereço" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Endereçar" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Data Janeiro" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Tempo Janeiro"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Carro Com AC</option>
            <option value="non-ac">Sem AC</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Buscar Carro</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;


