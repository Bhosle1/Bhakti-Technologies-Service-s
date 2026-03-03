// src/ContactForm.jsx
import { useState } from "react";
import axios from "axios";
import './ContactFrom.css';

 function ContactForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/send-mail", form);

      if (res.data.success) {
        alert("Mail Sent Successfully ✅");
      } else {
        alert("Mail Failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    }
  };

  return (

    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "600px",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        background : "#000000",
        padding : "20px",
      }}
    >
      <h2 style={{ color: "white" }}>Contact Us</h2>



      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />

<input
        type="text"
        name="Number"
        placeholder="Your Number"
        value={form.Nmuber}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send</button>
    </form>


  );
}


export default ContactForm;
