// BackToTop.jsx
import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-bg-primary border-3 rounded-circle border-light back-to-top"
      style={{ display: visible ? "inline" : "none", position: "fixed", bottom: "20px", right: "20px" }}
    >
      <i className="fa fa-arrow-up text-white"></i>
    </button>
  );
};

export default BackToTop;