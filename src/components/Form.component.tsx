import emailjs from "@emailjs/browser";
import { FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { CustomButton } from "./CustomButton.component";

export const Form = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID_HERE || "defaultServiceId";
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_HERE || "defaultTemplateId";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [success, setSuccess] = useState(false);

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
            setSuccess(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <>
      {success ? (
        <h3>Thank you, your message was sent</h3>
      ) : (
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="form-cotainer-fields">
            <FormControl className="form-field">
              <InputLabel htmlFor="name-input">Your name</InputLabel>
              <Input id="name-input" aria-describedby="name-helper-text" name="user_name" />
            </FormControl>

            <FormControl className="form-field">
              <InputLabel htmlFor="email-input">Email address</InputLabel>
              <Input id="email-input" aria-describedby="email-helper-text" name="user_email" />
              <FormHelperText id="email-helper-text">I'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl className="form-field">
              <TextField id="message-textarea" label="" multiline rows={4} defaultValue="   Your message" variant="standard" name="message" />
            </FormControl>
            <CustomButton type="submit" value="Send" className="form-field">
              Send message
            </CustomButton>
          </form>
        </div>
      )}
    </>
  );
};
