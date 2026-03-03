import React from "react";

export default function Logoslider() {

  const logos = [
    
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
   
  ];

  return (
    <div style={{
      width: "100%",
      padding: "40px 0",
      background: "#fafafa",
      overflow: "hidden"
    }}>
      
      {/* INLINE ANIMATION CSS */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          width: "200%",
          animation: "scroll 25s linear infinite"
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} style={{
            width: "20%",
            display: "flex",
            justifyContent: "center"
          }}>
            <img src={logo} alt="logo" style={{ width: 120 }} />
          </div>
        ))}
      </div>

    </div>
  );
}




