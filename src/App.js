import './App.css';
import { StyledApp, StyledBody } from './theme';
import { Wheel } from './Wheel';
export const App = () => {

  return (
    <StyledApp >
      <header>Picker Wheel</header>

      <div>
        <Wheel />
        <StyledBody>
          <h1>How to use</h1>
          <p>Click the "Spin" button to spin the wheel.</p>
          <p>The wheel will spin for 2 seconds before stopping.</p>
          <p>Once the wheel stops, the selected item will be highlighted.</p>
        </StyledBody>
      </div>
    </StyledApp>
  );
};