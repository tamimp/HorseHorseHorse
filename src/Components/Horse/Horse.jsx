import React from "react";
import "./Horse.scss";

const Horse = () => {
  return (
    <div className="horse">
      <div className="horse__body">
        <div className="horse__tail"></div>
        <div className="horse__leg horse__leg--front-left"></div>
        <div className="horse__leg horse__leg--front-right"></div>
        <div className="horse__leg horse__leg--back-left"></div>
        <div className="horse__leg horse__leg--back-right"></div>
        <div className="horse__neck">
          <div className="horse__head">
            <div className="horse__ear horse__ear--left"></div>
            <div className="horse__ear horse__ear--right"></div>
            <div className="horse__eye"></div>
            <div className="horse__muzzle"></div>
          </div>
          <div className="horse__mane"></div>
        </div>
      </div>
    </div>
  );
};

export default Horse;
