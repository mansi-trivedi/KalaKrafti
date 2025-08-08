"use client";
import React, { FormEvent, useCallback, useRef, useState } from "react";
import Button from "../Button/Button";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // const validateForm = useCallback(
  //   (email: string, name: string, message: string) => {
  //     const formErrors: ContactErrorProps = {};
  //     const emailRegex =
  //       /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+$/;

  //     if (!email) {
  //       formErrors.email = "Email is required.";
  //     } else if (!emailRegex.test(email)) {
  //       formErrors.email = "Email is invalid.";
  //     }

  //     if (!name) {
  //       formErrors.name = "Name is required.";
  //     }

  //     if (!message) {
  //       formErrors.name = "Message is required.";
  //     }

  //     setErrors(formErrors);
  //     if (Object.keys(formErrors).length !== 0) {
  //       return false;
  //     }
  //     return true;
  //   },
  //   []
  // );

  const handleOnFormSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (formRef?.current) {
        setIsLoading(true);
        const formData = new FormData(formRef.current);
        const email = formData.get("email") as string;
        const name = formData.get("name") as string;
        const message = formData.get("message") as string;
        {
          try {
            const response = await fetch("/api/send-email", {
              method: "POST",
              body: JSON.stringify({
                name,
                email,
                message,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            const result = await response.json();
            formRef.current.reset();
            setIsLoading(false);
            toast.success(result.message);
          } catch (e) {
            console.error(e);
            setIsLoading(false);
          }
        }
      }
    },
    []
  );

  return (
    <form
      ref={formRef}
      onSubmit={handleOnFormSubmit}
      className="flex flex-col text-[16px]"
    >
      <textarea
        name="message"
        placeholder="Message"
        rows={10}
        className="w-full border border-brick border-b-0 p-2 focus:outline-none"
        required
      />
      {/* {errors.message && <p className="text-red-500">{errors.message}</p>} */}
      <div className="flex">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-1/2 border border-brick border-r-0 p-2 focus:outline-none"
          required
        />
        {/* {errors.name && <p className="text-red-500">{errors.name}</p>} */}
        <input
          type="email"
          name="email"
          placeholder="Your Mail"
          className="w-1/2 border border-brick p-2 focus:outline-none"
          required
        />
        {/* {errors.email && <p className="text-red-500">{errors.email}</p>} */}
      </div>

      <Button
        type="submit"
        className="w-36 h-10 text-white2 font-xl uppercase tracking-wide my-5 py-2 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]"
      >
        {isLoading ? (
          <BeatLoader color="white" loading={isLoading} />
        ) : (
          <span>SEND</span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
