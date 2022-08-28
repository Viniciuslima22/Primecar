import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import { Container } from "reactstrap";
import'../../styles/hero-slider.css'

const HeroSlider = () => {

     const settings = {
        fade:true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay:true,
        slidesToShow:1,
        slidesToScrooll:1,
        pauseOnHouver: false,
     }
  

    return (
    <Slider {...settings} className="hero__slider">
 <div className=" slider__item slider__item-01 mt0">
    <Container>
        <div className="slider__content">
     <h4 className="text-light mb-3"> Para alugar R$120,00 diaria</h4>
     <h1 className="text-light mb-4">Reserve agora e ganhe 50% de desconto</h1>
   
     <button className="bnt reserve__btn mt-4">
        <Link to='/cars'>Reserve agora</Link>
     </button>
      
     </div>
    </Container>
 </div>

 <div className=" slider__item slider__item-02 mt0">
    <Container>
        <div className="slider__content">
     <h4 className="text-light mb-3"> Para alugar R$70,00 diaria</h4>
     <h1 className="text-light mb-4">Reserve agora e ganhe 50% de desconto</h1>
   
     <button className="bnt reserve__btn mt-4">
        <Link to='/cars'>Reserve agora</Link>
     </button>
      
     </div>
    </Container>
 </div>

 <div className=" slider__item slider__item-03 mt0">
    <Container>
        <div className="slider__content">
     <h4 className="text-light mb-3"> Para alugar R$90,00 diaria</h4>
     <h1 className="text-light mb-4">Reserve agora e ganhe 50% de desconto</h1>
   
     <button className="reserve__btn mt-4">
        <Link to='/cars'>Reserve agora</Link>
     </button>
      
     </div>
    </Container>
 </div>


    </Slider>
    )
}

export default HeroSlider