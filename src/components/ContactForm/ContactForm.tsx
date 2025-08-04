import React from "react";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <form className="flex flex-col text-[16px]">
      <textarea
        name="message"
        placeholder="Message"
        rows={10}
        className="w-full border border-brick border-b-0 p-2 focus:outline-none"
      />
      <div className="flex">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-1/2 border border-brick border-r-0 p-2 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Mail"
          className="w-1/2 border border-brick p-2 focus:outline-none"
        />
      </div>

      <Button
        type="submit"
        className="w-36 h-10 text-white2 font-xl uppercase tracking-wide my-5 py-2 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]"
      >
        SEND
      </Button>
    </form>
  );
};

export default ContactForm;
