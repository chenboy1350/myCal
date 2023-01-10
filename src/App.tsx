import React from 'react';
import './App.css';
import Wrapper from './Components/Warpper';
import Screen from './Components/Screen';
import ButtonBox from './Components/ButtonBox';
import Button from './Components/Button';

const btnClassName = [
  [["C", "button"],["+-", "button"],["%", "button"],["/", "opt button"]],
  [[7, "button"],[8, "button"],[9, "button"],["x", "opt button"]],
  [[4, "button"],[5, "button"],[6, "button"],["-", "opt button"]],
  [[1, "button"],[2, "button"],[3, "button"],["+", "opt button"]],
  [[0, "button"],[".", "button"],["=", "equals button"]]
];

function App() {
  return (
    <div>
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {btnClassName.flat().map((btn) => (
            <Button
              value={btn[0]}
              style={btn[1].toString()}
            />))
            }
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
