import clsx from "clsx";
import { useContext, useState } from "react";
import { userInputContext } from "../../context/userInputContext";
import Modal from "../Modal/Modal";
import "./board.css";

export enum MarkName {
  X = "X",
  O = "O",
}

const Board = () => {
  const [active, setActive] = useState<Record<number, MarkName>>({});
  const [winnerPattern, setWinnerPattern] = useState<number[]>([]);
  const a = useContext(userInputContext);

  const boxData = [
    {
      id: 1,
      className: "cell",
    },
    {
      id: 2,
      className: "cell",
    },
    {
      id: 3,
      className: "cell",
    },
    {
      id: 4,
      className: "cell",
    },
    {
      id: 5,
      className: "cell",
    },
    {
      id: 6,
      className: "cell",
    },
    {
      id: 7,
      className: "cell",
    },
    {
      id: 8,
      className: "cell",
    },
    {
      id: 9,
      className: "cell",
    },
  ];

  const checkWinner = (activeIds: object, id: number, turn: MarkName) => {
    let winnerfound = false;
    let activePlayerClickedBox = [id];
    const winnerNumber: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    if (!winnerfound) {
      for (const [key, value] of Object.entries(activeIds)) {
        if (value === turn) {
          activePlayerClickedBox = [...activePlayerClickedBox, Number(key), id];
        }
      }

      for (let i = 0; i < winnerNumber.length; i++) {
        if (
          activePlayerClickedBox.includes(winnerNumber[i][0]) &&
          activePlayerClickedBox.includes(winnerNumber[i][1]) &&
          activePlayerClickedBox.includes(winnerNumber[i][2])
        ) {
          winnerfound = true;
          setWinnerPattern(winnerNumber[i]);
          a?.setShowBoard(false);
          a?.setWinnerPlayer(turn);
          break;
          return;
        } else {
        }
      }
    }
    activePlayerClickedBox = [];
  };

  return (
    <div className="wrapper">
      <h1 className="heading">Tic Tac Toe</h1>
      <button
        className="btn-new"
        onClick={() => {
          setActive({});
          a?.setActivePlayer(MarkName.X);
          a?.setWinnerPlayer("");
        }}
      >
        New Game
      </button>
      <div className="board">
        {boxData.map((data) => {
          return (
            <div
              className={clsx("cell", {
                isActive: Object.keys(active).includes(data.id.toString()),
              })}
              data-type={active[data.id]}
              key={data.id}
              id={data.id.toString()}
              onClick={(e) => {
                const id = parseInt(e.target.id);
                const activeIds = Object.keys(active);
                if (activeIds.includes(id.toString())) return;

                setActive((prev) => ({
                  ...prev,
                  [id]: a?.activePlayer ?? MarkName.X,
                }));

                checkWinner(active, id, a?.activePlayer ?? MarkName.X);

                if (!a?.winnerPlayer) {
                  a?.setActivePlayer(
                    a.activePlayer === MarkName.O ? MarkName.X : MarkName.O
                  );
                }
              }}
            ></div>
          );
        })}
      </div>
      <div className="turn-show">
        <div className={`${a?.activePlayer === "X" && "activePlayer"}`}>X</div>
        <div className={`${a?.activePlayer === "O" && "activePlayer"}`}>0</div>
      </div>
      {a?.winnerPlayer && (
        <Modal winnerPlayer={a?.winnerPlayer} setActive={setActive} />
      )}
    </div>
  );
};

export default Board;
