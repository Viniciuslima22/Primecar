import React from "react";
import {Container, Row, Col} from "reactstrap"
import { Link, NavLink } from "react-router-dom";
import '../../styles/header.css'


const navLinks = [
    { 
      path: '/home',
      display: 'Home'
    },
    { 
        path: '/about',
        display: 'Sobre'
    },
    { 
        path: '/cars',
        display: 'Carros'
    },
    { 
        path: '/blogs',
        display: 'Blogues'
      },
      { 
          path: '/contact',
          display: 'Contato'
      },
     
]

const Header = () => {
    return  <header className="header">
   
    
    <div className="header__top">
        <Container>
            <Row>
                <Col lg= '6' md='6' sm = '6'>
                    <div className="header__top__left">
                        <span>Precisa de ajuda?</span>
                        <span className="header__top__help">
                        <i class="ri-phone-fill"></i> +55 1999465-3013
                       </span>
                    </div>
                
                </Col>
                <Col lg= '6' md='6' sm = '6'>
                <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                    <Link to='#' className="d-flex aling-items-center gap-1"> <i class="ri-login-circle-fill"></i> Entrar </Link>
                    <Link to='#' className="d-flex aling-items-center gap-1"> <i class="ri-user-line"></i> Registre-se </Link>

                </div>
                </Col>
                </Row>
            </Container>
        </div>
        <div className="header__middle">
            <Container>
                <Row>
                    <Col lg='4' md='3' sm='4'>
                        <div className="logo">
                            <h1> <Link to='/home' className="d-flex alingn-items-center gap-3"> <i class="ri-car-line"></i> 
                            <span>Primecar <br/> Serviços</span></Link></h1>
                        </div>
                        </Col>
                       
                       <Col lg='3' md='3' sm='4'>
                          <div className="header__location d-flex align-items-center gap-2 ">
                            <span><i class="ri-earth-line"></i></span>
                            <div className="header__location-content">
                                <h4>Brasil</h4>
                                <h6>Indaiatuba-SP, Brazil</h6>
                            </div>
                          </div>
                        </Col> 

                        <Col lg='3' md='3' sm='4'>
                          <div className="header__location d-flex align-items-center gap-2 ">
                            <span><i class="ri-time-line"></i></span>
                            <div className="header__location-content">
                                <h4>Segunda a sexta</h4>
                                <h6>7:00 - 18:00</h6>
                            </div>
                          </div>
                        </Col> 


                    <Col lg='2' md='3' sm='0' className=" d-flex align-items-center justify-content-end">
                        <button className="header__btn btn">
                       <Link to='/contact'><i class="ri-phone-line"></i>
                       Ligue Para</Link>
                        </button>
                    </Col>
                </Row>
            </Container>
         </div>
         <div className="main__navbar">
            <Container>  
                <div className="navigation__wrapper d-flex alingn-items-center justify-content-between">
                    <span className="mobile__menu"> <i class="ri-menu-line"></i></span>

                    <div className="navigation">
                        <div className="menu">
                            {navLinks.map((item,index) =>(
                                <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active nav__item' : 'nav__item'} key={index}>{item.display}</NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="nav__right">
                        <div className="search__box">
                            <input type="text" placeholder="Procurar" />
                            <span><i class="ri-search-line"></i></span>
                        </div>
                    </div>
                </div>
            </Container>
         </div>

    </header>
    

}

export default Header