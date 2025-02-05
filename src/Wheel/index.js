
import { style } from "styled-components";
import { StyledWheel } from "./styled";
import { use, useState } from "react";
import { useEffect, useRef } from "react";
import { SpinButton } from "./SpinButton";

export const Wheel = () => {

  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef(null);
  const [rotation, setRotation] = useState();
  const [finalRotation, setFinalRotation] = useState(0);

  const win = () => {



    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setFinalRotation(Math.floor(Math.random() * 360));
      const newRotation = (parseInt(finalRotation));
      let result = "";
      if (finalRotation >= 0 && finalRotation < 90) result = "Żółty";
      else if (finalRotation >= 90 && finalRotation < 180) result = "Niebieski";
      else if (finalRotation >= 180 && finalRotation < 270) result = "Zielony";
      else result = "Żółty";
      console.log("finalRotation: ", finalRotation);
      console.log("result: ", result);
      alert(`Wylosowano: ${result}`);
      setRotation(0); // Reset the rotation state
      wheelRef.current.style.transform = `rotate(0deg)`;
    }, 3000); // Adjust the duration as needed

    return finalRotation; // synchronize the rotation state with the wheel's rotation
  }

  const useSpinning = () => {

    useEffect(() => {

      if (isSpinning && wheelRef.current) { // variables compare to true
        const currentRotation = wheelRef.current.style.transform.replace(/[^0-9]/g, '') || 0;
        const newRotation = (parseInt(finalRotation));  //praseINt converts a string to an integer
        wheelRef.current.style.transition = "transform 3s ease-out";
        wheelRef.current.style.transform = `rotate(${newRotation}deg)`;
        setFinalRotation({ newRotation });

      }
    }, [isSpinning]);

    const spin = () => {

    };
    return { isSpinning, spin, wheelRef };
  };



  const { spin } = useSpinning();

  return (
    <div>
      <div>
        ▼
      </div>


      <StyledWheel ref={wheelRef}>
        <SpinButton onClick={() => { win(); spin(); }} disabled={isSpinning}>
          Spin
        </SpinButton>

      </StyledWheel>
    </div>
  );
};
