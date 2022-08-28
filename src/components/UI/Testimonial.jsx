import React from "react";
import Slider from "react-slick";
import "../../styles/testimonial.css";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus aut sapiente velit illo cumque id quibusdam 
          dolorum maiores deleniti. Doloremque optio fugiat 
          nesciunt placeat eum facilis explicabo animi tempora?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Henrique</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, ipsam enim aliquid, earum perspiciatis 
          totam amet voluptas id recusandae aliquam 
          perferendis quod, exercitationem ullam doloribus quo alias quis laboriosam ad!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Fernanda</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda 
          aliquid culpa odio accusamus, quas eaque aspernatur ab rem illum nemo alias qui 
          sed, odit officiis nulla voluptates repellendus corporis.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Rafael</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Sed quam dignissimos praesentium numquam aliquid officia architecto corrupti illum a fugit impedit, adipisci 
          dolore rem aspernatur animi, quidem, labore dolorum repellat.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ana</h6>
            <p className="section__description">Cliente</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;