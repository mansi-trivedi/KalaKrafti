import ContactForm from "@/components/ContactForm/ContactForm";
import ContactUsImage from "@/components/ContactUsImage/ContactUsImage";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactUsImage />
      <div className="h-[90vh] grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 grid-cols-1 pt-16 px-10">
        <div className="">
          <p className="font-semibold tracking-widest text-3xl text-brick p-5">
            We are looking forward to hear from you. Contact us and say Hello.
          </p>
          <div className="p-5 pt-0">
            <SocialMedia />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
