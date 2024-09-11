import React from "react";
import "./Horse.scss"; // Ensure to import the SCSS for the Horse component

const Horse = ({ maneTailColor, bodyColor }) => {
  return (
    <div className="horse">
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
