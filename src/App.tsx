import "./App.css";
import Board from "./components/Board";
import { useContext } from "react";
import { userInputContext } from "./context/userInputContext";

function App() {
  const a = useContext(userInputContext);

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
