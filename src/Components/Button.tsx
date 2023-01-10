import { useContext } from "react";

interface Props {
    value: string | number
    style: string
}

const Button = ({ value, style }:Props) => {
  return (
    <button className={`${style}`}>{value}</button>
  )
}

export default Button