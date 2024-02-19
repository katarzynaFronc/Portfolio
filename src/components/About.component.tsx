import { StacList } from "./StackButton.component";

export const About = () => {
  return (
    <div className="about-container">
      <h3>Kaja</h3>
      <div className="about-stack">
        <StacList />
      </div>
      <p className="about-description">
        Officially Katarzyna, although my friends call me Kaja. I dreamed of writing code since elementary school, but life decided otherwise and for many years my path veered away from programming. I briefly returned to coding in 2010, when I needed to create a website for my photography business .
        Then there was a separation again, until I decided to do professionally what I had always enjoyed. In 2023, I completed a 9-month course and was certified as a Junior Frontend Developer. Since then, writing code has become my daily routine. I constantly develop my skills by participating in
        trainings, hackathons and writing web applications. On this site you can get acquainted with my more interesting projects, to which you are cordially invited. If you need a person with my skills to complete your project, please <a href="/contact">contact me.</a>
      </p>
    </div>
  );
};
