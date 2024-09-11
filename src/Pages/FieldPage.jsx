import React, { useState } from "react";
import Horse from "../Components/Horse/Horse";
import "./FieldPage.scss"; // Import the SCSS file for styling

const FieldPage = () => {
  const [horses, setHorses] = useState([]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addHorse = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const topOneThirdHeight = viewportHeight / 3; // Height for the top 1/3 of the viewport
    const horseWidth = 150; // Width of the horse
    const horseHeight = 120; // Height of the horse

    // Calculate available space for random Y position
    const maxY = viewportHeight - horseHeight;

    // Generate a random position within the allowed area
    const randomX = Math.random() * (viewportWidth - horseWidth); // Ensure x position is within the viewport width
    const randomY =
      Math.random() * (maxY - topOneThirdHeight) + topOneThirdHeight; // Ensure y position is within the lower 2/3 of the viewport

    // Generate random colors
    const bodyColor = getRandomColor();
    const maneTailColor = getRandomColor();

    // Add a new horse with random position and colors
    setHorses([
      ...horses,
      { x: randomX, y: randomY, bodyColor, maneTailColor },
    ]);
  };

  const clearHorses = () => {
    setHorses([]); // Clears all horses
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
          />
        </div>
      ))}
    </div>
  );
};

export default FieldPage;
