import "./App.css";
import Board from "./components/Board";
import Home from "./pages";
import { useContext } from "react";
import { userInputContext } from "./context/userInputContext";

function App() {
  const a = useContext(userInputContext);

  return (
    <div className="App">
      {!a?.showBoard && <Home />}
      {a?.showBoard && <Board />}
    </div>
  );
}

export default App;
