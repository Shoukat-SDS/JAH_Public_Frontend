// Testimonial.jsx
import React from "react";
import Slider from "react-slick";
import TestimonialImage from '../../assets/testimonial-1.jpg'
import TestimonialImage1 from '../../assets/testimonial-2.jpg'
import TestimonialImage2 from '../../assets/testimonial-3.jpg'
import TestimonialImage3 from '../../assets/testimonial-4.jpg'

const testimonialsData = [
  {
    img: TestimonialImage,
    name: "Full Name",
    profession: "Profession",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.",
  },
  {
    img: TestimonialImage1,
    name: "Full Name",
    profession: "Profession",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.",
  },
  {
    img: TestimonialImage2,
    name: "Full Name",
    profession: "Profession",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.",
  },
  {
    img: TestimonialImage3,
    name: "Full Name",
    profession: "Profession",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 }
      }
    ]
  };
  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: "700px" }}
        >
          <p className="fs-5 text-uppercase text-primary">Testimonial</p>
          <h1 className="display-3">What People Say About Islam</h1>
        </div>

        <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.1s">
          <Slider {...settings}>
            {testimonialsData.map((t, index) => (
              <div className="testimonial-item" key={index}>
                <div className="d-flex mb-3">
                  <div className="position-relative">
                    <img src={t.img} className="img-fluid" alt={t.name} />
                    <div
                      className="btn-md-square bg-primary rounded-circle position-absolute"
                      style={{ top: "25px", left: "-25px" }}
                    >
                      <i className="fa fa-quote-left text-dark"></i>
                    </div>
                  </div>
                  <div className="ps-3 my-auto">
                    <h5 className="mb-0">{t.name}</h5>
                    <p className="m-0">{t.profession}</p>
                  </div>
                </div>

                <div className="testimonial-content">
                  <div className="d-flex">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <i className="fas fa-star text-primary" key={i}></i>
                    ))}
                  </div>
                  <p className="fs-5 m-0 pt-3">{t.comment}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
