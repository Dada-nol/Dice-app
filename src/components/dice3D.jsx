import { useState } from "react";

function Dice3D() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const rollDice = () => {
    const xRotation = [0, 90, 180, 270][Math.floor(Math.random() * 4)];
    const yRotation = [0, 90, 180, 270][Math.floor(Math.random() * 4)];

    const xMove = Math.random() * 200 - 100;
    const yMove = Math.random() * 200 - 100;

    setRotation({ x: xRotation, y: yRotation });
    setPosition({ x: position.x + xMove, y: position.y + yMove });
  };

  return (
    <>
      <div className="scene">
        <div
          className="cube"
          onClick={rollDice}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <div className="face front">1</div>
          <div className="face back">2</div>
          <div className="face right">3</div>
          <div className="face left">4</div>
          <div className="face top">5</div>
          <div className="face bottom">6</div>
        </div>
      </div>
    </>
  );
}

export default Dice3D;
