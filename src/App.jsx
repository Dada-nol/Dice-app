import "./App.css";
import Dice from "./components/dice2D";
import Dice3D from "./components/dice3D";

function App() {
  return (
    <>
      <h1>🎲 Dé Virtuel</h1>
      <Dice></Dice>
      <Dice3D></Dice3D>
    </>
  );
}

export default App;
