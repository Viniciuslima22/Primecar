import React from "react";
import { Container,Row,Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/footer.css'


const quickLinks = [
    {
      path: "/about",
      display: "Sobre",
    },
  
    {
      path: "#",
      display: "Politica de Privacidade",
    },
  
    {
      path: "/cars",
      display: "Lista de carros",
    },
    {
      path: "/blogs",
      display: "Blogue",
    },
  
    {
      path: "/contact",
      display: "Contato",
    },
  ];

const Footer = () => {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='4' md='4' sm='12'>
                <div className="logo footer__logo">
                            <h1> 
                            <Link to='/home' className="d-flex alingn-items-center gap-2">
                            
                            <i class="ri-car-line"></i> 
                            <span>Primecar <br/> Serviços</span></Link></h1>
                        </div>
                        <p className="footer__logo-content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi odit 
                            ullam excepturi aspernatur aliquam 
                            voluptas officia fugiat laborum quae cum beatae repellendus 
                            corporis praesentium vel quibusdam tenetur, exercitationem vero dolor.
                        </p>
               </Col>

               <Col lg='4' md='4' sm ='6'>
                  <div className="mb-4"> 
                  <h5 className="footer__link-title"> Link rápido</h5>
                  <ListGroup>
                    {
                        quickLinks.map((item,index)=>(
                         <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                                    <Link to={item.path}>{item.display}</Link>
                         </ListGroupItem>   
                        ))
                    }
                  </ListGroup>
                  </div>
                  </Col>

                  <Col lg ='3' md ='4' sm='6'>
                       <div className="mb-4">
                       <h5 className="footer__link-title"> Escritório Central</h5>
                       <p className="office__info">Francisco de Paula Leite 123, Indaiatuba-SP</p>
                       <p className="office__info">Telefone +55 1999465-3013</p>
                       <p className="office__info">Email: vinicius.villela@outlook.com</p>
                       <p className="office__info">Segunda a sexta 7:00 - 18:00 </p>
                       </div>
                    </Col>

                    
              
            </Row>
        </Container>
    </footer>
    
}

export default Footer