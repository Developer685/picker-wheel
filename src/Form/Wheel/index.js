import { StyledWheel } from "./styled";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { SpinButton } from "./SpinButton";

export const Wheel = ({ options, newOption }) => {

  const wheelRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [finalRotation, setFinalRotation] = useState(0);

  const win = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setFinalRotation(Math.floor(Math.random() * 360));
      let result = "";
      if (finalRotation >= 0 && finalRotation < 90) result = "Żółty";
      else if (finalRotation >= 90 && finalRotation < 180) result = "Niebieski";
      else if (finalRotation >= 180 && finalRotation < 270) result = "Zielony";
      else result = "Czerwony";
      console.log("finalRotation: ", finalRotation);
      console.log("result: ", result);
      alert(`Wylosowano: ${result}`);
      wheelRef.current.style.transform = `rotate(0deg)`;
      setIsSpinning(false);

    }, 3000); // Adjust the duration as needed

    return finalRotation; // synchronize the rotation state with the wheel's rotation
  }

  const useSpinning = () => {

    useEffect(() => {

      if (isSpinning && wheelRef.current) { // variables compare to true
        const newRotation = (parseInt(finalRotation) + 1800);
        wheelRef.current.style.transition = "transform 3s ease-out";
        wheelRef.current.style.transform = `rotate(${newRotation}deg)`;
        setFinalRotation({ newRotation });
      }
    });
    return { isSpinning, wheelRef };
  };
  useSpinning();

  return (
    <div>
      <div>
        ▼
      </div>
      <StyledWheel ref={wheelRef} options={options} newOption={newOption}>
        <SpinButton onClick={() => { win() }} disabled={isSpinning}>
          Spin
        </SpinButton>
      </StyledWheel>
    </div>
  );
};