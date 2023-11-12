import "./index.css"
import React from "react";
function App() {
 
  const [number, setNumber] = React.useState(0)

  const plus = () => {
    setNumber(number + 1)
  }
  const minus= () => {
    setNumber(number - 1)
  }
  return (
    <div className="block">
      <p className="title">Эсептегич (Cчетчик):</p>
      <p className="count">{number}</p>
      <div className="buttons" >
        <button onClick={plus}>Кошуу (Плюс) +</button>
        <button onClick={minus}>Кемитуу (Минус) -</button>
      </div>
    </div>
  );
}

export default App;
