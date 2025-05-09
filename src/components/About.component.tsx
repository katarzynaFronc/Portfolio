import { StackList } from "./StackList.component";
import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <div className="about-image-container">
        <img src={image} alt="image" className="about-image" />
      </div>
      <div className="about-description-container">
        <p className="about-description-content">
          Helo!
          <br />
          Officially Katarzyna, although my friends call me Kaja.
          <br />I dreamed of writing code since elementary school, but life decided otherwise and for many years my path veered away from programming.
          <br />I briefly returned to coding in 2010, when I needed to create a website for my own photography business (KFAF-fotografia). Then there was a separation again, until I decided to do professionally what I had always enjoyed.
          <br />
          In 2023, I completed the course and was certified as a Junior Frontend Developer.
          <br />
          In my daily work I use the low-code platform to develop solutions for business. Complemented with JavaScript, C# and SQL I create complete frontend and backend projects.
          <br />I also constantly develop my skills by participating in trainings, hackathons and writing web applications.
          <br />
          On this site you can get acquainted with my projects, to which you are cordially invited. If you need a person with my skills for your project, please{" "}
          <span onClick={() => navigate("/contact")} className="about-link">
            contact me.
          </span>
        </p>
      </div>
      <div className="about-stack-container">
        <StackList />
      </div>
    </div>
  );
};
