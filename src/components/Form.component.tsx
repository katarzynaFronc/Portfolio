import emailjs from "@emailjs/browser";
import { FormControl, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { CustomButton } from "./CustomButton.component";
import { useFormik } from "formik";
import * as Yup from "yup";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validationSchema = Yup.object().shape({
  user_name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  message: Yup.string().min(2, "Too Short!").max(500, "Too Long! Max 500 signs").required("Required"),
  email: Yup.string().matches(emailRegex, "Invalid email").required("Required"),
});

interface FormProps {
  user_name: string;
  email: string;
  message: string;
}

export const Form = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID_HERE || "defaultServiceId";
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_HERE || "defaultTemplateId";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [success, setSuccess] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  const validateRequired = (value: string) => {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error;
  };

  const sendEmail = () => {
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

  const formik = useFormik<FormProps>({
    initialValues: {
      user_name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    validate: (values) => {
      const errors: Partial<FormProps> = {};
      if (!values.user_name || !values.email || !values.message) {
        errors.email = validateRequired(values.email);
        errors.user_name = validateRequired(values.user_name);
        errors.message = validateRequired(values.message);
      }
      return errors;
    },
    onSubmit: sendEmail,
  });

  return (
    <>
      {success ? (
        <h3>Thank you, your message was sent</h3>
      ) : (
        <div className="form-container">
          <form ref={form} onSubmit={formik.handleSubmit} className="form-cotainer-fields">
            <h3>Write me a message</h3>
            <TextField
              id="standard-basic"
              label="Your name"
              variant="standard"
              name="user_name"
              className="form-field"
              value={formik.values.user_name}
              onChange={formik.handleChange}
              error={formik.touched.user_name && Boolean(formik.errors.user_name)}
              helperText={formik.touched.user_name && formik.errors.user_name}
            />

            <TextField id="standard-basic" label="email" variant="standard" name="email" className="form-field" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} />

            <FormControl className="form-field">
              <TextField id="message-textarea" label="message" multiline rows={4} variant="standard" name="message" onChange={formik.handleChange} error={Boolean(formik.touched.message && formik.errors.message)} helperText={formik.touched.message && formik.errors.message} />
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
