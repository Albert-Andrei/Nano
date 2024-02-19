"use client";
import React, { FC, SyntheticEvent, useRef, useState } from "react";

export const ContactForm: FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    setIsLoading(true);

    if (form?.current) {
      //   sendForm(
      //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      //     form?.current,
      //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      //   )
      //     .then(() => {
      //       setIsSent(true);
      //       setIsLoading(false);
      //       form?.current?.reset();
      //       return;
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //       setIsLoading(false);
      //     });
      form?.current?.reset();
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <input required id="name" type="name" name="name" placeholder="Name" maxLength={55} />

      <input
        required
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        title="exmaple@gmail.com"
        onInvalid={() => "Please match the requested format: exmaple@gmail.com"}
        pattern="([A-Za-z0-9][._]?)+[A-Za-z0-9]@[A-Za-z0-9]+(\.?[A-Za-z0-9]){2}\.(com?|net|org)+(\.[A-Za-z0-9]{2,4})?"
        maxLength={55}
      />

      <textarea required name="message" placeholder="Message" />

      {isLoading || isSent ? (
        <div>{isSent ? <p>Thank you for your message</p> : <p>Loading...</p>}</div>
      ) : (
        <input type="submit" value="Send Message" />
      )}
    </form>
  );
};
