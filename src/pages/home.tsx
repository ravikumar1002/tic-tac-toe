// interface homeProps {
//   setShowBoard: Function;
// }F

import { useContext } from "react";
import { userInputContext } from "../context/userInputContext";

const Home = () => {
  const a = useContext(userInputContext);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <button
        onClick={() => {
          a?.setShowBoard(true);
        }}
      >
        Start game
      </button>
    </div>
  );
};

export default Home;
