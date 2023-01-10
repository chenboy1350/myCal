import React from 'react';

interface Props {
    children: React.ReactNode
}

const ButtonBox = ({ children }:Props) => {
    return (
      <div className="buttonBox">{children}</div>
    )
  }
  
  export default ButtonBox