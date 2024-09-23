import React, { useState } from "react";
import Horse from "../../Components/Horse/Horse";
import "./FieldPage.scss";
import hornSound from "../../assets/magic.mp3";

const FieldPage = () => {
  const [horses, setHorses] = useState([]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color;
    do {
      color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    } while (color.startsWith("#00") || color.startsWith("#0"));
    return color;
  };

  const addHorse = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const topOneThirdHeight = viewportHeight / 3;
    const horseWidth = 150;
    const horseHeight = 120;
    const maxY = viewportHeight - horseHeight;

    const randomX = Math.random() * (viewportWidth - horseWidth);
    const randomY =
      Math.random() * (maxY - topOneThirdHeight) + topOneThirdHeight;

    const bodyColor = getRandomColor();
    const maneTailColor = getRandomColor();
    const showHorn = Math.random() < 0.1;

    setHorses([
      ...horses,
      { x: randomX, y: randomY, bodyColor, maneTailColor, showHorn },
    ]);

    if (showHorn) {
      const audio = new Audio(hornSound);
      audio.play();
    }
  };

  const clearHorses = () => {
    setHorses([]);
  };

  return (
    <div className="field-page">
      <button onClick={addHorse} className="add-horse-button">
        Add Horse
      </button>
      <button onClick={clearHorses} className="clear-horses-button">
        Clear Horses
      </button>
      {horses.map((horse, index) => (
        <div
          key={index}
          className="horse-container"
          style={{ top: horse.y, left: horse.x, position: "absolute" }}
        >
          <Horse
            bodyColor={horse.bodyColor}
            maneTailColor={horse.maneTailColor}
            showHorn={horse.showHorn}
          />
        </div>
      ))}
      <footer className="footer">
        Ranch sponsored by Tami Poliwoda. Thanks for visiting!
      </footer>
    </div>
  );
};

export default FieldPage;
