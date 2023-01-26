import React, { useContext } from "react";
import { CalContext } from './Context/CalcContext';

interface ButtonProps {
    value: string | number
    style: string
}

const Button = ({ value, style }:ButtonProps) => {
  const calContext = useContext(CalContext);
  
  const equalsClick = () => {
    if(calContext?.cal_Handle.result && calContext?.cal_Handle.number) {
      const math = (index1: number, index2: number, operation: string): number => {
        const result: { [key: string]: (index1: number, index2: number) => number } = {
          '+': (index1, index2) => index2 + index2,
          '-': (index1, index2) => index2 - index2,
          'x': (index1, index2) => index2 * index2,
          '/': (index1, index2) => index2 / index2,
        }
        return result[operation](index1, index2);
      }
      calContext.setCal_Handle({
        result: math(Number(calContext.cal_Handle.result), Number(calContext.cal_Handle.number), String(calContext.cal_Handle.operation)),
        operation: '',
        number: 0
      })
    }
  }

    const signClick = () => {
      calContext?.setCal_Handle({
        operation: value,
        result: !calContext.cal_Handle.result && calContext.cal_Handle.number ? calContext.cal_Handle.number : calContext.cal_Handle.result,
        number: 0
      })
    }

  const resetClick = () => {
    console.log("Reset Clicked")
    calContext?.setCal_Handle({ operation: '', number: 0, result: 0 })
  }

  const handleClickButton = () => {
    console.log("Number Clicked")
    const numberString = value.toString()

    let numberValue;
    if(numberString === '0' && calContext?.cal_Handle.number === 0) {
      numberValue = "0"
    } else {
      numberValue = Number(calContext?.cal_Handle.number + numberString)
    }

    calContext?.setCal_Handle({
      ...calContext.cal_Handle,
      number: numberValue
    })
  }

  const handleBtnClick = () => {
    const results: {[key: string]: () => void} = {
      'C': resetClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
    }
    if(results[value]) {
      return results[value]()
    } else {
      return handleClickButton()
    }
  }

  return (
    <button className={`${style}`} onClick={handleBtnClick} >{value}</button>
  )
}

export default Button