import React from 'react';
import './App.css';
import Wrapper from './Components/Warpper';
import Screen from './Components/Screen';
import ButtonBox from './Components/ButtonBox';
import Button from './Components/Button';

const btnClassName = [
  [["AC", "button", "ALL_CLEAR"],["C", "button", "CLEAR"],["%", "button", "PERCENT"],["/", "opt button", "OPERATION"]],
  [[7, "button", "NUMBER"],[8, "button", "NUMBER"],[9, "button", "NUMBER"],["x", "opt button", "OPERATION"]],
  [[4, "button", "NUMBER"],[5, "button", "NUMBER"],[6, "button", "NUMBER"],["-", "opt button", "OPERATION"]],
  [[1, "button", "NUMBER"],[2, "button", "NUMBER"],[3, "button", "NUMBER"],["+", "opt button", "OPERATION"]],
  [[0, "button", "NUMBER"],[".", "button", "NUMBER"],["=", "equals button", "EQUALS"]]
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
              event={btn[2].toString()}
            />))
            }
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
