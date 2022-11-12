import clsx from "clsx";
import { useEffect, useState } from "react";
import "./board.css";

enum MarkName {
  X = "X",
  O = "O",
}

const Board = () => {
  const [active, setActive] = useState<Record<number, MarkName>>({});

  useEffect(() => {
    setActive({ 3: MarkName.X });
  }, []);

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

  console.log(MarkName);
  return (
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
              setActive((prev) => ({ ...prev, [id]: MarkName.X }));
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Board;
