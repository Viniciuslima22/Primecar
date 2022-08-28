import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Nome" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Sobrenome" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Telefone" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="A partir do endereço" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Para o Endereço" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Pessoa</option>
          <option value="2 person">2 Pessoas</option>
          <option value="3 person">3 Pessoas</option>
          <option value="4 person">4 Pessoas</option>
          <option value="5+ person">5+ Pessoas</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 bagagem</option>
          <option value="2 luggage">2 bagagem</option>
          <option value="3 luggage">3 bagagem</option>
          <option value="4 luggage">4 bagagem</option>
          <option value="5+ luggage">5+ bagagem</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Janeiro"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Escreva"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;