import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const Header = () => {
  const navigate = useNavigate();
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);

  useEffect(() => {
    const firstAnimationDuration = 1600;
    const timer = setTimeout(() => {
      setFirstAnimationComplete(true);
    }, firstAnimationDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="header-container">
      <div onClick={() => navigate("/")} className="header-link">
        <TypeAnimation cursor={false} className="header-text" sequence={[`FirstName SecondName`, 1000]} repeat={0} />
      </div>
      {firstAnimationComplete && (
        <div onClick={() => navigate("/")} className="header-link">
          <TypeAnimation cursor={false} className="header-text-second-line" sequence={[`Frontend Developer`, 1000]} repeat={0} />
        </div>
      )}
    </div>
  );
};
