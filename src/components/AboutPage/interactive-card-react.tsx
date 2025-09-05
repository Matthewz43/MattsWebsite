import React, { useState } from 'react';
import '../../styles/introCard.css'

interface MousePosition {
  x: number;
  y: number;
}

const InteractiveCard: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [randomText, setRandomText] = useState<string>('');

  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
  const randomChar = (): string => chars[Math.floor(Math.random() * (chars.length - 1))];
  
  const randomString = (length: number): string => 
    Array.from(Array(length)).map(randomChar).join("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    setRandomText(randomString(15000));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    setMousePosition({ x, y });
    setRandomText(randomString(1500));
  };

  return (
    <div className="interactive-card-container">
      <div className="card-track">
        <div className="card-wrapper">
          <div 
            className="card"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            <div className="card-image">
              <h1>this is my website</h1>



            </div>
            <div className="card-gradient"></div>
            <div 
              className="card-letters"
              style={{
                '--x': `${mousePosition.x}px`,
                '--y': `${mousePosition.y}px`,
              } as React.CSSProperties}
            >
              {randomText}
            </div>
            <div className="card-corners">
              <span className="card-corner"></span>
              <span className="card-corner"></span>
              <span className="card-corner"></span>
              <span className="card-corner"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;