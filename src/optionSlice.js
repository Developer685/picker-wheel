
import { createSlice } from "@reduxjs/toolkit";

const intialState = [];

const optionSlice = createSlice({
  name: "options",
  initialState: intialState,

  reducers: {
    addOption: (state, actions) => {
      state.push(actions.payload);
    },
    removeOption: ({ options }, { payload: optionId }) => {
      const index = options.findIndex(({ id }) => id === optionId);
      options.splice(index, 1);
    },
  },
});

export const { addOption, removeOption } = optionSlice.actions;