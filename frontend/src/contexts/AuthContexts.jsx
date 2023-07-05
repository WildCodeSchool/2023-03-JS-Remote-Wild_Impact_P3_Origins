import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);

export function CurrentUserProvider({ children }) {
  const [user, setUser] = useState("");
  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
