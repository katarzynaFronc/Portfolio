import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { user } from "../api/user";

export const Header = () => {
  const navigate = useNavigate();
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);
  // const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const firstAnimationDuration = 1500;
    // const delayDuration = 2000;

    // const delayTimer = setTimeout(() => {
    //   setIsDelayed(true);
    // }, delayDuration);

    const animationTimer = setTimeout(() => {
      setFirstAnimationComplete(true);
    }, firstAnimationDuration);

    return () => {
      // clearTimeout(delayTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  // if (!isDelayed) {
  //   return null;
  // }

  return (
    <div className="header-container">
      <div onClick={() => navigate("/")} className="header-link">
        <TypeAnimation cursor={false} className="header-text" sequence={[`${user.firstName} ${user.lastName}`, 1000]} repeat={0} />
      </div>
      {firstAnimationComplete && (
        <div onClick={() => navigate("/")} className="header-link">
          <TypeAnimation cursor={false} className="header-text-second-line" sequence={[`Frontend Developer`, 1000]} repeat={0} />
        </div>
      )}
    </div>
  );
};
