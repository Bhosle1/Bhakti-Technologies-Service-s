import React, { useState, useEffect } from 'react'
import Slider from '../../components/Slider';
import './Home.css';

function Home() {

  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Scroll event to show popup
  useEffect(() => {
    const handleScroll = () => {
      if (!popupShown && window.scrollY > 200) {
        setShowPopup(true);
        setPopupShown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [popupShown]);

  // Close popup
  const closePopup = () => setShowPopup(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Form Submitted Successfully!");
        setShowPopup(false);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error submitting form!");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error!");
    }
  };

  return (
    <>
 {/* Popup */}
 {showPopup && (
        <div className="popup-container">
          <div className="popup-box">
            <h2>Contact Us</h2>

            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <button onClick={handleSubmit}>Submit</button>
            <span className="close-btn" onClick={closePopup}>X</span>
          </div>
        </div>
      )}


  <Slider />

  <section id="about" className="py-5 bg-light text-center">
    <div className="container">
      <h2 className="fw-bold mb-4">ABOUT BRAINMINE Technology Services</h2>
      <p className="text-muted mb-4">
        Brainmine Technology Services is a Pune-based IT company specializing in
        software development, web design, app solutions, and digital marketing.
        Our mission is to empower businesses through innovation and creativity.
      </p>

      <div className="row mt-4">
        <div className="col-md-3 mb-3">
          <div className="p-3 border rounded bg-white shadow-sm h-100">
            <h4 className="fw-bold text-primary">1.5+ Years</h4>
            <p className="mb-0 text-muted">Experience</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-3 border rounded bg-white shadow-sm h-100">
            <h4 className="fw-bold text-primary">Expert</h4>
            <p className="mb-0 text-muted">Development Team</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-3 border rounded bg-white shadow-sm h-100">
            <h4 className="fw-bold text-primary">100%</h4>
            <p className="mb-0 text-muted">Client Satisfaction</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-3 border rounded bg-white shadow-sm h-100">
            <h4 className="fw-bold text-primary">24/7</h4>
            <p className="mb-0 text-muted">Support</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg bg-info p-5 my-5">
    <h2 class="fw-bold mb-4 text-center">About BRAINMINE Technology Services</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div class="card-body">
            <h5 class="card-title">AI TECHNOLOGY SERVICES</h5>
            <p class="card-text">Custom AI-powered applications designed to automate workflows and improve business performance.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div class="card-body">
            <h5 class="card-title">Machine Learning Solutions</h5>
            <p class="card-text">Predictive models, classification, clustering, and analytics to empower decision-making.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div class="card-body">
            <h5 class="card-title">Chatbot & Virtual Assistant Development</h5>
            <p class="card-text">Smart conversational bots for websites, apps, and customer support (24/7 automation).</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div class="card-body">
            <h5 class="card-title">AI Integration for Mobile & Web Apps</h5>
            <p class="card-text">Integrating smart features like recommendation systems, voice commands, and auto-analysis.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div class="card-body">
            <h5 class="card-title">Cloud-Based AI Solutions</h5>
            <p class="card-text">AI services powered by AWS, Azure, Google Cloud for scalability and security.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div class="card-body">
            <h5 class="card-title">AI Model Training & Deployment</h5>
            <p class="card-text">Training custom ML models and deploying them on cloud or on-premise environments.</p>
          </div>
        </div>
      </div>
    </div>
  </section>



  </>
  );
};

export default Home;