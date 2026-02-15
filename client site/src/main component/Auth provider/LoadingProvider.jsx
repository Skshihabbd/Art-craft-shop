import { createContext, useState, useEffect } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  // প্রথমবার site open হলে spinner দেখানোর জন্য true
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false); // page fully loaded হলে hide

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
