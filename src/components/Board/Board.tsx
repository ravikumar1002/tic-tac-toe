import clsx from "clsx";
import { useContext, useState } from "react";
import { userInputContext } from "../../context/userInputContext";
import "./board.css";

enum MarkName {
  X = "X",
  O = "O",
}


const Board = () => {
  const [active, setActive] = useState<Record<number, MarkName>>({});
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
                const id = e.target.id;
                setActive((prev) => ({ ...prev, [id]: MarkName.O }));
              }}
            ></div>
          );
        })}
      </div>
      <div className="turn-show">
        <div>X</div>
        <div>0</div>
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
