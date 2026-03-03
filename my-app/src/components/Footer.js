import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5 ">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* --- Company Info --- */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase">Branmine Technology</h5>
            <p>
              We are a software development company providing full-stack
              solutions, web design, and mobile app development services.
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/projects" className="text-light text-decoration-none">Projects</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* --- Contact Info --- */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase">Contact</h6>
            <p><i className="bi bi-telephone-fill me-2"></i> <Link to="/tel:+91 9876543210">+91 98765 43210</Link></p> 
            <p><i className="bi bi-envelope-fill me-2"></i> <Link to="/mailto:info@bhaktitech.com">info@bhaktitech.com</Link></p>
            <p><i className="bi bi-geo-alt-fill me-2"></i> Pune, Maharashtra</p>
          </div>

          {/* --- Social Links --- */}
          <div className="col-md-3 mb-4 text-center text-md-start">
            <h6 className="fw-bold text-uppercase">Follow Us</h6>
            <a href="https://www.facebook.com" className="text-light me-3 fs-5"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com" className="text-light me-3 fs-5"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com" className="text-light me-3 fs-5"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com" className="text-light fs-5"><i className="bi bi-github"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-3 border-top pt-2">
        <p className="mb-0 small">
          © {new Date().getFullYear()} Bhakti Technology Services. All Rights Reserved.
        </p>
      </div>
      
    </footer>
  );
}

export default Footer;
