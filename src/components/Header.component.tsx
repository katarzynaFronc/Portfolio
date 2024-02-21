import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div onClick={() => navigate("/")} className="header-link">
        <TypeAnimation cursor={false} className="header-text" sequence={[`FirstName SecondName\nFrontend Developer`, 1000]} repeat={0} />
      </div>
    </div>
  );
};
