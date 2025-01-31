import { createContext, useState, useEffect } from "react";

export const DataContext = createContext<any>({});

export const DataProvider = ({ children }: any) => {

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("appData");
    return storedData ? JSON.parse(storedData) : {};
  });

  // Salva no LocalStorage sempre que o estado mudar
  useEffect(() => {
    localStorage.setItem("appData", JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
