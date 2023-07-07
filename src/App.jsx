import { useState } from "react";
import "./index.css";
// const Color = (props) => {
//   return <div className={props.color}></div>;
// };
const Color = ({ color, selectedColor, setSelectedColor }) => {
  return (
    <div
    className={`color ${color} ${selectedColor === color ? "selected" : ""}`}
    onClick={() => setSelectedColor(color)}
  ></div>
  );
};
const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
