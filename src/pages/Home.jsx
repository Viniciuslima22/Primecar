import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from '../components/UI/FindCarForm'
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData"
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";


const Home = () => {
    return(
        
       <Helmet title= 'Home'>
        <section className="p-0 hero__slider-section">
            <HeroSlider/>
    
            <div className="hero__form">
                <Container>
                <Row className="form__row">
                    <Col lg='4' md='4'>
                        <div className="find__cars-left">
                            <h2>Encontre aqui o seu melhor carro</h2>
                        </div>
                    </Col>
                    <Col lg='8' md='8' sm='12'>
                        <FindCarForm/>
                    </Col>
                </Row>
                </Container>
            </div>
        </section>
    <AboutSection/>

       <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-5 d-flex row">
                    <h6 className="section__subtitle">
                        Veja nosso
                    </h6>
                    <h2 className="section__title">Serviços populares</h2>
                    <ServicesList/>
                </Col>
            </Row>
        </Container>
       </section>
             

             <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h6 className="section__subtitle text-center mb-5">Veja aqui</h6>
                            <h2 className="section__title text-center">Melhores Ofertas</h2>
                        </Col>
                        {carData.slice(0,6).map((item)=> (
                            <CarItem item={item} key={item.id}/>
                        ))}
                    </Row>
                </Container>
             </section>
                <BecomeDriverSection/>
                
                <section>
                    <Container>
                        <Row>
                            <Col lg='12' className="mb-4 text-center">
                                <h6 className="section__subtitle">O que nossos clientes dizem</h6>
                                <h2 className="section__title">Depoimentos</h2>
                                <Testimonial/>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="">
                    <Container>
                        <Row>
                            <Col lg='12' className="d-flex row">
                                <h6 className="section__subtitle">Explore nossos blogues</h6>
                                <h2 className="section__title">Últimos blogs</h2>
                                <BlogList/>
                            </Col>
                        </Row>
                    </Container>
                </section>
       </Helmet>

    )
}

export default Home