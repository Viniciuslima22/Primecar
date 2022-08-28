import React from "react";
import {Col,Row,Container} from 'reactstrap'
import '../../styles/about-section.css'
import carft1 from '../../assets/all-images/cars-img/mercedes-offer.png'


const AboutSection = () => {
    return(
   <section>
    <Container>
        <Row>
            <Col lg= '6' md='6'></Col>
            <div className="about__section-content">
              <h4 className="section__subtitle">Sobre nós</h4>
              <h2 className="section__title">Bem-vindo a Primecar</h2>
              <p className="section__description">Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Dolor dolorem ea dolores amet sequi
               laudantium laboriosam fugiat, corporis 
              ducimus dolore eius, dolorum dicta, beatae cum saepe 
              non hic? Tenetur, accusamus.</p>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__descripition d-flex align-items-center gap-2">
                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet
                </p>
                
                <p className="section__descripition d-flex align-items-center gap-2">
                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet
                </p>
              
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__descripition d-flex align-items-center gap-2">
                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet
                </p>
                
                <p className="section__descripition d-flex align-items-center gap-2">
                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet
                </p>
              
              </div>
            
            </div>
            
            <Col lg= '6' md='6'>   
               <div className="about__img">
               <img src={carft1}alt="Carro" className="w-100" />
               </div>

            </Col>
            
            
        
        </Row>
    </Container>
   </section>
    )
}

export default AboutSection