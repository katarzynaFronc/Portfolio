import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Form = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID_HERE || "defaultServiceId";
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_HERE || "defaultTemplateId";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(serviceId, templateID, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
