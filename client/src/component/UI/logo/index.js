import React from "react";

const Logo = () => {
  return (
    <div style={{minWidth:"80px"}}>
      <h3
        style={{
          marginBottom: 0,
          fontStyle: "italic",
          textShadow: "2px 4px 4px rgba(46,91,173,0.6)",
          fontWeight: "bold",
        }}
      >
        Prag<span style={{ color: "red" }}>y</span>a
      </h3>
      <p
        style={{
          width: "75%",
          marginBottom: 0,
          fontSize: "0.7rem",
          color: "#1b5e20",
          textShadow: "2px 4px 4px rgba(46,91,173,0.6)",
          fontWeight: "bold",
          backgroundImage: "linear-gradient(red,pink)",
        }}
      >
        Ro System
      </p>
    </div>
  );
};

export default Logo;
