import React from 'react'
import "./About.css";

function About() {
  return (
    <>
      <div className="overlay">
        <h1 className="main-heading">About Us</h1>
      </div>

      <section style={{ padding: "50px 0", background: "#f7f7f7" }}>
        <div style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "auto",
          alignItems: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>

          {/* Left Side Image */}
          <div style={{ flex: "1" }}>
            <img
              src="my-app\src\Assets\my image.jpeg"
              alt="Founder"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </div>

          {/* Right Side Content */}
          <div style={{ flex: "1" }}>
            <h2 style={{
              fontSize: "32px", marginBottom: "15px",
              color: " #000000"
            }}>About Our Founder</h2>
            <p style={{ fontSize: "18px", lineHeight: "28px", marginBottom: "20px", color: "#000000" }}>
              Meet <strong>Mr. Vaibhav Bhosle</strong>, the visionary behind our company.
              With over 3+ years of experience in the tech industry, he has built
              innovative solutions that help businesses grow digitally.
            </p>

            <p style={{
              fontSize: "18px", lineHeight: "28px",
              color: "#000000"
            }}>
              His aim is to create a platform where technology meets creativity.
              Under his leadership, the company continues to innovate and expand,
              delivering high-quality digital products that make an impact.
            </p>
          </div>

        </div>
      
      </section>

      <section className="stats-section">
      <div className="stats-container">
        <h2 className="stats-heading">
          Quickly drive interoperable portals via technology
          <br />
          economically and sound networks website
        </h2>

        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-dot"></span>
            <p className="stat-label">Problem Solved</p>
            <h3 className="stat-value">100%</h3>
            <p className="stat-desc">
              Bhakti Technology delivers reliable and efficient digital solutions
              with proven success rates.
            </p>
          </div>

          <div className="stat-box">
            <span className="stat-dot"></span>
            <p className="stat-label">Satisfied Clients</p>
            <h3 className="stat-value">20K+</h3>
            <p className="stat-desc">
              Trusted by businesses across industries for scalable and secure
              technology services.
            </p>
          </div>

          <div className="stat-box">
            <span className="stat-dot"></span>
            <p className="stat-label">Pro Team Members</p>
            <h3 className="stat-value">10+</h3>
            <p className="stat-desc">
              A skilled team of developers, designers, and consultants powering
              Bhakti Technology.
            </p>
          </div>
        </div>
      </div>
    </section>

   



    </>
  )
}

export default About;