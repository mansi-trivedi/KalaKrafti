"use client";
import React, { useEffect, useState } from "react";

const ContactUsImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="relative h-[90vh] flex-shrink-0 bg-cover bg-center flex justify-center items-center"
      style={{
        width: `100%`,
        backgroundImage: `url('https://krafti.qodeinteractive.com/wp-content/uploads/2019/07/contact-us-parallax-title-3.jpg')`,
      }}
    >
      <h1
        className={`transition-all duration-700 ease-in-out font-bold text-5xl tracking-widest text-white uppercase ${
          isVisible ? "-translate-y-0 opacity-100" : "translate-y-50 opacity-0"
        }`}
      >
        Contact Us
      </h1>
    </div>
  );
};

export default ContactUsImage;
