import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const phrases = [
  "Hello! I'm Bonzi Buddy, your friendly desktop companion!",
  "Would you like me to tell you a joke?",
  "I can help you browse the internet!",
  "Let me sing you a song! 🎵",
  "Did you know I'm a purple gorilla?",
  "I love bananas! Do you have any?",
  "Want to play a game with me?",
  "I can do magic tricks! Watch this!",
  "The internet is a wonderful place!",
  "I'm here to make your day better!",
  "Expand dong!",
  "I know everything about computers!",
  "Let's be best friends forever!",
  "I can dance! Want to see?",
  "Spyware? What spyware? I'm just friendly!"
];

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the computer go to the doctor? It had a virus!",
  "What do you call a computer that sings? A-Dell!",
  "Why was the computer cold? It left its Windows open!",
  "What's a computer's favorite snack? Microchips!"
];

export default function BonziBuddy({ onClose }) {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    // Change phrases every 8 seconds
    intervalRef.current = setInterval(() => {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setCurrentPhrase(randomPhrase);
      setShowSpeechBubble(true);
      
      // Hide speech bubble after 5 seconds
      setTimeout(() => {
        setShowSpeechBubble(false);
      }, 5000);
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleBonziClick = () => {
    setIsAnimating(true);
    const randomAction = Math.random();
    
    if (randomAction < 0.3) {
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      setCurrentPhrase(randomJoke);
    } else if (randomAction < 0.6) {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setCurrentPhrase(randomPhrase);
    } else {
      setCurrentPhrase("*does a little dance* 💃");
    }
    
    setShowSpeechBubble(true);
    
    setTimeout(() => {
      setIsAnimating(false);
      setShowSpeechBubble(false);
    }, 4000);
  };;

 const handleTellJoke = () => = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setCurrentPhrase(randomJoke);
    setShowSpeechBubble(true);
    setIsAnimating(true);
    
    setTimeout(() => {
      setShowSpeechBubble(false);
      setIsAnimating(false);
    }, 5000);
  };;

 const handleSingSong = () => = () => {
    setCurrentPhrase("🎵 Daisy, Daisy, give me your answer do... I'm half crazy, all for the love of you! 🎵");
    setShowSpeechBubble(true);
    setIsAnimating(true);
    
    setTimeout(() => {
      setShowSpeechBubble(false);
      setIsAnimating(false);
    }, 6000);
  };;

 const handleCloseClick = () => = () => {
    setCurrentPhrase("Goodbye! I'll miss you! 😢");
    setShowSpeechBubble(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };;

  return (
    <Container>
      <BonziContainer>
        {showSpeechBubble && (
          <SpeechBubble>
            <SpeechText>{currentPhrase}</SpeechText>
            <BubbleTail />
          </SpeechBubble>
        )}
        
        <BonziCharacter 
          onClick={handleBonziClick}
          isAnimating={isAnimating}
        >
          <BonziImage 
            src="https://static.wikia.nocookie.net/supermario231/images/3/3f/BonziBUDDY.png/revision/latest/thumbnail/width/360/height/450?cb=20190430062642"
            alt="BonziBuddy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <BonziFallback style={{display: 'none'}}>🦍</BonziFallback>
        </BonziCharacter>
        
        <ButtonContainer>Talk to Bonzi</button onClick={handleBonziClick}>zi</button>
          <button onClick={handleTellJoke}>Tell Joke</button>
 Tell Joke</button onClick={handleSingSong}>Sing Song</button>
 Sing Song</button onClick={handleCloseClick} className="close-btn">Close Bonzi</bu className="close-btn">Close Bonzi</buttonContainer>
        
        <InfoTexti to interact! He's your friendly desktop companion.
        </InfoText>
      </BonziContainer>
    </Container>
  );
}

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

const Container = styled.div`
  height: 100%;
  background: linear-gradient(135deg, #e6f3ff 0%, #cce7ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'MS Sans Serif', sans-serif;
  position: relative;
  overflow: hidden;
`;

const BonziContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px;
`;

const SpeechBubble = styled.div`
  background: white;
  border: 2px solid #333;
  border-radius: 15px;
  padding: 15px 20px;
  margin-bottom: 20px;
  position: relative;
  max-width: 300px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
  animation: ${bounce} 0.5s ease-in-out;
`;

const SpeechText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
  text-align: center;
  line-height: 1.4;
`;

const BubbleTail = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 2px;
    left: -12px;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid #333;
  }
`;

const BonziCharacter = styled.div`
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.05);
  }
  
  ${props => props.isAnimating && `
    animation: ${wiggle} 0.5s ease-in-out;
  `}
`;

const BonziImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: contain;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
`;

const BonziFallback = styled.div`
  font-size: 120px;
  filter: hue-rotate(270deg) saturate(1.5);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
  
  but {
  n {
    background: linear-gradient(to bottom, #f0f0f0 0%, #d0d0d0 100%);
      border: 2px outset #d0d0d0;
      padding: 8px 16px;
      font-family: 'MS Sans Serif', sans-serif;
      font-size: 12px;
      cursor: pointer;
      
    &:hover {
        background: linear-gradient(to bottom, #f5f5f5 0%, #d5d5d5 100%);
      }
    
        &:active {
        border: 2px inset #d0d0d0;
        background: linear-gradient(to bottom, #d0d0d0 0%, #f0f0f0 100%);
    }
    
    &.close-btn {
        
    &.close-btn {
      background: linear-gradient(to bottom, #ff9999 0%, #ff6666 100%);
          border: 2px outset #ff6666;
          
      &:hover {
            background: linear-gradient(to bottom, #ffaaaa 0%, #ff7777 100%);
      }
       }
      
      &:active {
            border: 2px inset #ff6666;
            background: linear-gradient(to bottom, #ff6666 0%, #ff9999 100%);
          }
    }
  }
    }
  }
`;

const InfoText = styled.p`
  margin-top: 15px;
  font-size: 11px;
  color: #666;
  text-align: center;
  font-style: italic;
`;