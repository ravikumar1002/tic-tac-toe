import { createContext, ReactNode, useState } from "react";
import { MarkName } from "../components/Board/Board";

interface userInputContextProps {
  showBoard: boolean;
  setShowBoard: React.Dispatch<React.SetStateAction<boolean>>;
  activePlayer: MarkName;
  setActivePlayer: React.Dispatch<React.SetStateAction<MarkName>>;
}

const userInputContext = createContext<userInputContextProps | null>(null);

interface UserInputProviderProps {
  children: ReactNode;
}

const UserInputProvider = ({ children }: UserInputProviderProps) => {
  const [showBoard, setShowBoard] = useState(false);
  const [activePlayer, setActivePlayer] = useState<MarkName>(MarkName.X);

  return (
    <userInputContext.Provider
      value={{ showBoard, setShowBoard, setActivePlayer, activePlayer }}
    >
      {children}
    </userInputContext.Provider>
  );
};

export { userInputContext, UserInputProvider };
