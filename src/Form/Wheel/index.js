import { useState } from "react";
import { Button, WheelContainer, Pointer, ButtonsContainer } from "./styled";

export const Wheel = ({ numberOfElements, options }) => {
  const [rotation, setRotation] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const sectorAngle = 360 / numberOfElements;

  const spinWheel = () => {
    const randomTurns = Math.floor(Math.random() * 5) + 3; 
    const randomOffset = Math.random() * sectorAngle; 
    const newRotation = rotation + randomTurns * 360 + randomOffset;
    setRotation(newRotation);


    setTimeout(() => {
      const normalizedRotation = (newRotation % 360 + 360) % 360; 
      const indicatorAngle = 270; 
      const effectiveAngle = (360 - normalizedRotation + indicatorAngle) % 360;
      const selectedIndex = Math.floor(effectiveAngle / sectorAngle) % numberOfElements;
      setSelectedOption(options[selectedIndex]?.content || "Brak opcji");
    }, 3000); 
  };

  const resetWheel = () => {
    setRotation(0);
    setSelectedOption(null);
  };

  const createCircularSector = (radius, startAngle, endAngle) => {
    const radians = (angle) => (Math.PI / 180) * angle;
    const x1 = radius * Math.cos(radians(startAngle));
    const y1 = radius * Math.sin(radians(startAngle));
    const x2 = radius * Math.cos(radians(endAngle));
    const y2 = radius * Math.sin(radians(endAngle));

    return `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 ${endAngle - startAngle > 180 ? 1 : 0
      } 1 ${x2} ${y2} Z`;
  };

  return (
    <WheelContainer >
      <div style={{ position: "relative", display: "inline-block" }}>
   
        <Pointer/>
        <svg
          width="200"
          height="200"
          viewBox="-100 -100 200 200"
          style={{ transform: `rotate(${rotation}deg)`, transition: "transform 3s ease-out" }}
        >
          {options.map((option, i) => {
            const startAngle = sectorAngle * i;
            const endAngle = startAngle + sectorAngle;
            const color = i % 2 === 0 ? "#2C3E50" : "#D7BFAE";

            const angle = (startAngle + endAngle) / 2;
            const radius = 70;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <g key={option.id}>
                <path
                  d={createCircularSector(100, startAngle, endAngle)}
                  fill={color}
                />
                <text
                  x={x}
                  y={y}
                  fontSize="12"
                  fill="white"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${angle}, ${x}, ${y})`}
                >
                  {option.content}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <ButtonsContainer>
        <Button spin onClick={spinWheel} >Zakręć kołem</Button>
        <Button reset onClick={resetWheel}>Resetuj</Button>
        <p>Wylosowana opcja: {selectedOption}</p>
      </ButtonsContainer>

    </WheelContainer>
  );
};
