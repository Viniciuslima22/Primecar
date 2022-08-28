import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Lista de carros" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Ordenar por
                </span>

                <select>
                  <option>Selecionar</option>
                  <option value="low">Baixo para alto</option>
                  <option value="high">Alto para baixo</option>
                </select>
              </div>
            </Col>

            {carData.slice(0,6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;