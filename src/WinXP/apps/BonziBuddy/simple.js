import React, { useState } from 'react';
import styled from 'styled-components';

export default function BonziBuddy({ onClose }) {
  const [message, setMessage] = useState("Hello! I'm BonziBuddy!");

  const handleTalk = () => {
    setMessage("Thanks for clicking me!");
  };

  const handleJoke = () => {
    setMessage("Why did the computer go to the doctor? It had a virus!");
  };

  return (
    <Container>
      <h2>BonziBuddy</h2>
      <BonziImage 
        src="https://static.wikia.nocookie.net/supermario231/images/3/3f/BonziBUDDY.png/revision/latest/thumbnail/width/360/height/450?cb=20190430062642"
        alt="BonziBuddy"
        width="150"
        height="200"
      />
      <Message>{message}</Message>
      <ButtonContainer>
        <button onClick={handleTalk}>Talk</button>
        <button onClick={handleJoke}>Joke</button>
        <button onClick={() => onClose()}>Close</button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  background: #c0c0c0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'MS Sans Serif', sans-serif;
`;

const BonziImage = styled.img`
  margin: 20px 0;
`;

const Message = styled.div`
  background: white;
  border: 2px inset #c0c0c0;
  padding: 10px;
  margin: 10px 0;
  min-height: 40px;
  width: 80%;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  
  button {
    padding: 5px 15px;
    font-family: 'MS Sans Serif', sans-serif;
    border: 2px outset #c0c0c0;
    background: #c0c0c0;
    cursor: pointer;
    
    &:active {
      border: 2px inset #c0c0c0;
    }
  }
`;