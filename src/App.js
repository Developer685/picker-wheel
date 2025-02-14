import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { StyledApp, StyledBody } from './theme';
import { Form } from './Form';

export const App = () => {
  const store = configureStore({ reducer: {} });

  return (
    <Provider store={store}>
      <StyledApp>
        <header>Picker Wheel</header>
        <div>
          <Form />
          <StyledBody>
            <h1>How to use</h1>
            <p>Click the "Spin" button to spin the  wheel.</p>
            <p>The wheel will spin for 5 seconds before stopping.</p>
            <p>Once the wheel stops, the selected item will be highlighted.</p>
          </StyledBody>
        </div>
      </StyledApp>
    </Provider>
  );
};