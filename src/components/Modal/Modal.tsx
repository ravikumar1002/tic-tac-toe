import { useContext } from "react";
import { userInputContext } from "../../context/userInputContext";
import { MarkName } from "../Board/Board";
import "./modal.css";

interface ModalProps {
  winnerPlayer: string;
  setActive: React.Dispatch<React.SetStateAction<{}>>;
}

const Modal = (props: ModalProps) => {
  const a = useContext(userInputContext);

  return (
    <div className="modal">
      <h2>Win !! :)</h2>
      <p className="winner-show" data-winner={props.winnerPlayer}>{props.winnerPlayer}</p>
      <button
        className="btn-new"
        onClick={() => {
          props.setActive({});
          a?.setActivePlayer(MarkName.X);
          a?.setWinnerPlayer("")
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default Modal;
