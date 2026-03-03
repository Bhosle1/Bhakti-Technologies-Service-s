import React, { useState } from 'react';

const faqData = [
  
  {
    question: "What distinct features are available in your collection of luxury villas in Goa?",
    answer: "Our exclusive properties redefine high-end living. Each luxury villa in Goa for sale features bespoke architectural design, private swimming pools ensuring an unparalleled premium experience."
  },
  {
    question: "Where can I buy luxury villas in Goa, specifically focusing on the most sought-after locations?",
    answer: "We offer villas in the most premium locations in Goa including South Goa beaches, North Goa hotspots, and exclusive gated communities."
  },
  {
    question: "What is the typical price of villa in Goa for your premium range, and what is included in the purchase?",
    answer: "Prices vary depending on location and size, but typically range from $500,000 to $5,000,000. The purchase includes the villa, landscaped garden, and private amenities like pool or gym depending on property."
  },
  {
    question: "Can I find options beyond 3BHK, such as a larger 4BHK villa Goa or even bigger residences?",
    answer: "Yes, we have options ranging from 4BHK villas to ultra-luxury estates with multiple bedrooms and expansive private grounds."
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <div style={{ maxWidth: '1100px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 className="faQ"><b>Frequently Asked Questions</b></h1>
      {faqData.map((faq, index) => (
        <div key={index} 
             style={{ 
               borderBottom: '1px solid #ccc', 
               padding: '28px 0', 
               cursor: 'pointer' 
             }}
             onClick={() => toggleFAQ(index)}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600', color: '#000' }}>
            {faq.question}
            <span>{openIndex === index ? '×' : '+'}</span>
          </div>
          {openIndex === index && (
            <div style={{ marginTop: '10px', color: '#000', lineHeight: '1.6' }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;

