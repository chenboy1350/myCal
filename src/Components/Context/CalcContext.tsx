import { useState, createContext, useEffect } from 'react';
import React from 'react';

export interface Cal_Input {
  number : number | string;
  operation : number | string;
  result : number | string;
};

const initCal_Input = {
  operation: "",
  number: 0,
  result: 0
}

interface CalContextType {
  cal_Handle : Cal_Input
  setCal_Handle: React.Dispatch<React.SetStateAction<Cal_Input>>;
};

interface CalContextProviderProps {
  children: React.ReactNode;
};

export const CalContext = createContext<CalContextType | null>(null);

export const CalContextProvider = ({ children }: CalContextProviderProps) => {
  const [cal_Handle, setCal_Handle] = useState<Cal_Input>(initCal_Input);

  React.useEffect(() => {
    console.log(cal_Handle)
  }, [cal_Handle]);

  const providerValue = {
    cal_Handle, setCal_Handle
  }
  
  return (
    <CalContext.Provider value={providerValue}>
      {children}
    </CalContext.Provider>
  );
};
