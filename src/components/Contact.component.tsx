import { CustomButtonLink } from "./CustomButton.component";

export const Contact = () => {
  return (
    <div className="contact-container-links">
      <h3>You can find me on:</h3>
      <a href="https://github.com/katarzynaFronc" target="_blank">
        <CustomButtonLink className="contact-container-links-button" style={{ backgroundImage: `url("/logo/GitHub_Logo.png")` }}></CustomButtonLink>
      </a>
      <a href="https://linkedin.com/in/katarzyna-f" target="_blank">
        <CustomButtonLink className="contact-container-links-button" style={{ backgroundImage: `url("/logo/LI-Logo.png")` }}></CustomButtonLink>
      </a>
    </div>
  );
};
