import { createContext, useContext, useEffect, useState } from "react";
import useGetMeme from "../FetchMemesAPI/useGetMemes";

const MemeContext = createContext();

export function MemeProvider({ children }) {
  const [memeType, setMemeType] = useState(
    localStorage.getItem("MemeType") || "/CatMemes"
  );

  // keep localStorage in sync
  useEffect(() => {
    localStorage.setItem("MemeType", memeType);
  }, [memeType]);

  const memeState = useGetMeme(memeType);

  return (
    <MemeContext.Provider value={{ ...memeState, memeType, setMemeType }}>
      {children}
    </MemeContext.Provider>
  );
}

export const useMeme = () => useContext(MemeContext);
