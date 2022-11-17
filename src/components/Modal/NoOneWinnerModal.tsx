import { useContext } from "react";
import { userInputContext } from "../../context/userInputContext";
import { MarkName } from "../Board/Board";
import "./modal.css";

interface ModalProps {
  setActive: React.Dispatch<React.SetStateAction<{}>>;
}

const NoOneWinnerModal = (props: ModalProps) => {
  const a = useContext(userInputContext);

  return (
    <div className="modal no-one-modal">
      <h2>No one is winner )</h2>
      <button
        className="btn-new"
        onClick={() => {
          props.setActive({});
          a?.setActivePlayer(MarkName.X);
          a?.setWinnerPlayer("");
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default NoOneWinnerModal;
