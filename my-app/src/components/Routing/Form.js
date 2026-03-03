import React, { useState } from "react";

function Form() {
  // Step 1: Create State Variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Step 2: Form Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { name, email, message });
    alert("Form Submitted Successfully!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Contact Form</h2>

      {/* Step 3: Form UI */}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          type="text" 
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Message</label>
        <textarea 
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Form;
