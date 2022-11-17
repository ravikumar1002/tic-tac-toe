import { createContext, ReactNode, useState } from "react";
import { MarkName } from "../components/Board/Board";

interface userInputContextProps {
  showBoard: boolean;
  setShowBoard: React.Dispatch<React.SetStateAction<boolean>>;
  activePlayer: MarkName;
  setActivePlayer: React.Dispatch<React.SetStateAction<MarkName>>;
  winnerPlayer: string;
  setWinnerPlayer: React.Dispatch<React.SetStateAction<string>>;
}

const userInputContext = createContext<userInputContextProps | null>(null);

interface UserInputProviderProps {
  children: ReactNode;
}

const UserInputProvider = ({ children }: UserInputProviderProps) => {
  const [showBoard, setShowBoard] = useState<boolean>(false);
  const [activePlayer, setActivePlayer] = useState<MarkName>(MarkName.X);
  const [winnerPlayer, setWinnerPlayer] = useState<string>("");


  return (
    <userInputContext.Provider
      value={{ showBoard, setShowBoard, setActivePlayer, activePlayer, winnerPlayer , setWinnerPlayer}}
    >
      {children}
    </userInputContext.Provider>
  );
};

export { userInputContext, UserInputProvider };
