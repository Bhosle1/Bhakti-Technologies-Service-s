import React from 'react'
import './Slider.css';


function Slider() {
  return (
    <div id="mainSlider" className="carousel slide" data-bs-ride="carousel">
      {/* --- Indicators (dots) --- */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#mainSlider"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#mainSlider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#mainSlider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* --- Slides --- */}
      <div className="slider-overlay"></div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="/img/mobile-app.jpg" className="d-block w-100 slider-img" alt="Mobile App" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Software Solutions</h3>
            <p>We build scalable and secure software systems.</p>
          </div>
        </div>

  <div className="slider-overlay"></div>
        <div className="carousel-item">
        <img src="/img/mobile-app.jpg" className="d-block w-100 slider-img" alt="Mobile App" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Web Development</h3>
            <p>Modern, responsive websites that grow your business.</p>
            
          </div>
        </div>
        
        
        <div className="slider-overlay"></div>
        <div className="carousel-item">
        <img src="/img/mobile-app.jpg" className="d-block w-100 slider-img" alt="Mobile App" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Mobile App Development</h3>
            <p>We turn your ideas into smart mobile experiences.</p>
          </div>
        </div>
      </div>

      {/* --- Navigation Buttons --- */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}


export default Slider;
