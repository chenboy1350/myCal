import React from "react";

interface Props {
    value: string | number
    style: string
    event: string
}

const Button = ({ value, style, event }:Props) => {
  const btnNumberHandle = () => {
    console.log(value)
   }


  if(event === "NUMBER"){
    return (
      <button className={`${style}`} onClick={btnNumberHandle} >{value}</button>
    )
  }else{
    return (
      <button className={`${style}`} >{value}</button>
    )
  }
}

export default Button