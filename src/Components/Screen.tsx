import React, { useContext } from 'react';
import { CalContext } from './Context/CalcContext';

const Screen = () => {
  const calContext = useContext(CalContext);

  return (
    <div>
      <div style={{textAlign: "right"}}>MyCal</div>
      <h1 style={{textAlign: "right"}} className="screen">{calContext?.cal_Handle.number ? calContext.cal_Handle.number : calContext?.cal_Handle.result}</h1>
    </div>
  )
}

export default Screen