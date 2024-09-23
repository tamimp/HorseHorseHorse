import React, { useRef } from "react";
import "./Horse.scss";
import neighSound from "../../assets/neigh.mp3";

const Horse = ({ maneTailColor, bodyColor, showHorn }) => {
  const audioRef = useRef(new Audio(neighSound));
  const handleMouseEnter = () => {
    audioRef.current.play();
  };

  return (
    <div className="horse" onMouseEnter={handleMouseEnter}>
      <div className="horse__body" style={{ backgroundColor: bodyColor }}>
        <div
          className="horse__tail"
          style={{ backgroundColor: maneTailColor }}
        ></div>
        <div
          className="horse__leg horse__leg--front-left"
          style={{ backgroundColor: bodyColor }}
        ></div>
        <div
          className="horse__leg horse__leg--front-right"
          style={{ backgroundColor: bodyColor }}
        ></div>
        <div
          className="horse__leg horse__leg--back-left"
          style={{ backgroundColor: bodyColor }}
        ></div>
        <div
          className="horse__leg horse__leg--back-right"
          style={{ backgroundColor: bodyColor }}
        ></div>
        <div className="horse__neck" style={{ backgroundColor: bodyColor }}>
          <div className="horse__head" style={{ backgroundColor: bodyColor }}>
            <div
              className="horse__ear horse__ear--left"
              style={{ backgroundColor: bodyColor }}
            ></div>
            <div
              className="horse__ear horse__ear--right"
              style={{ backgroundColor: bodyColor }}
            ></div>
            {showHorn && <div className="horse__horn"></div>}{" "}
            {/* Conditionally render the horn */}
            <div className="horse__eye"></div>
            <div
              className="horse__muzzle"
              style={{ backgroundColor: bodyColor }}
            ></div>
          </div>
          <div
            className="horse__mane"
            style={{ backgroundColor: maneTailColor }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Horse;
