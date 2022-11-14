import { createContext, ReactNode, useState } from "react";

interface userInputContextProps {
  showBoard: boolean;
  setShowBoard: React.Dispatch<React.SetStateAction<boolean>>;
  activePlayer: string;
  setActivePlayer: React.Dispatch<React.SetStateAction<string>>;
}

const userInputContext = createContext<userInputContextProps | null>(null);

interface UserInputProviderProps {
  children: ReactNode;
}

const UserInputProvider = ({ children }: UserInputProviderProps) => {
  const [showBoard, setShowBoard] = useState(false);
  const [activePlayer, setActivePlayer] = useState("X");
  return (
    <userInputContext.Provider
      value={{ showBoard, setShowBoard, setActivePlayer, activePlayer }}
    >
      {children}
    </userInputContext.Provider>
  );
};

export { userInputContext, UserInputProvider };
