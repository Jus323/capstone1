import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
export const HomePage = () => {

  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    //  randomizing the number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 1000000));
  };

  return(
    <div>
      <h1>Welcome Home, User</h1>
    
      <div>
          <div>
            <h1>Account Balance: ${num}</h1>
            <Button variant="warning" onClick={handleClick}>Click to Show Account Balance</Button>{' '}
          </div>
          
        <Button variant="dark" > Deposit </Button>{' '}
        <Button variant="dark" >Withdraw</Button>{' '}
      </div>
    </div>
  )
};