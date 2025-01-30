import { useState } from "react";

function Dice() {
  const [dice, setDice] = useState(1);

  const rollDice = () => {
    const randomNumber = () => Math.floor(Math.random() * 6) + 1;
    //Math.floor arrondi vers le chiffre du bas
    //Math.random donne un chiffre aléatoire entre 0 et 0.9999999
    setDice(randomNumber);
  };

  return (
    <>
      <div className="dice rolling">{dice}</div>
      <button onClick={rollDice}>Lancer le dé</button>
    </>
  );
}

export default Dice;
