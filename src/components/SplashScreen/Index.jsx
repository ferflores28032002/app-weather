import React from "react";

export const SplashScreen = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src={getRandomInt(10) >= 5 ? "/rainy.svg" : "/sunny.svg"}
        alt="rainy"
      />
    </div>
  );
};
