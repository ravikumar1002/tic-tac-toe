import clsx from "clsx";
import { useContext, useState } from "react";
import { userInputContext } from "../../context/userInputContext";
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
      className: "col",
    },
    {
      id: 2,
      className: "col",
    },
    {
      id: 3,
      className: "col",
    },
    {
      id: 4,
      className: "col",
    },
    {
      id: 5,
      className: "col",
    },
    {
      id: 6,
      className: "col",
    },
    {
      id: 7,
      className: "col",
    },
    {
      id: 8,
      className: "col",
    },
    {
      id: 9,
      className: "col",
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
        if(value === turn){
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
          break;
          return;
        } else {
        }
      }
    }
    activePlayerClickedBox = [];
  };

  return (
    <div>
      <div className="board">
        {boxData.map((data) => {
          return (
            <div
              className={clsx("col", {
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

                a?.setActivePlayer(
                  a.activePlayer === MarkName.O ? MarkName.X : MarkName.O
                );
              }}
            ></div>
          );
        })}
      </div>
      <div className="turn-show">
        <div>X</div>
        <div>0</div>
        {winnerPattern && <p>{winnerPattern}</p>}
      </div>
      <button
        onClick={() => {
          a?.setShowBoard(false);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default Board;
