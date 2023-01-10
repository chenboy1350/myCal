import React from 'react';
import { createContext, useState } from "react"

interface Props {
    children: React.ReactNode
}

interface ContextModel {
    value: string | null;
  }

interface CalcModel {
    sign: string | null;
    num: number | null;
    res: number | null;
  }

const initCalc = {
    sign: "",
    num: 0,
    res: 0
}

export const CalcContext = createContext<CalcModel>(initCalc)

const CalcProvider = ({ children }:Props) => {
  const [calc, setCalc] = useState<CalcModel>(initCalc);

  const providerValue = {
    calc, setCalc
  }

  return (
    <></>
    // <CalcContext.Provider value={{calc, setCalc}}>
    //   {children}
    // </CalcContext.Provider>
  )
}

export default CalcProvider