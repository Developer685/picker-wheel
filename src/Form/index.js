import { StyledForm } from "./styled";
import { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch } from "react-redux";
import { Wheel } from "./Wheel";
import { useRef } from "react";
import { addOption, removeOption } from "../optionSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Input } from "./Input/styled";
import { WheelElement } from "./Wheel/WheelElement";

export const Form = forwardRef((props, ref) => {

  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState("");
  const inputRef = useRef(null);
  const numberOfElements = options.length;
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedOption = newOption.trim();
    if (trimmedOption) {
      dispatch(addOption({
        content: trimmedOption,
        id: nanoid(),
      }));
      setOptions([...options, { id: nanoid(), content: trimmedOption }]);
    }

    setNewOption("");
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => ({
    getOptions: () => options,
  }));

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Wheel
        options={options}
        newOption={newOption}
      />
      <div>
        <Input
          ref={inputRef}
          value={newOption}
          onChange={({ target }) => { setNewOption(target.value); }}
          placeholder="Enter an option"
        />
        <button type="submit">Add</button>
        <ul>
          {
            options.map((option) => (
              <li key={option.id} style={{ listStyle: "none" }}>
                {option.content}
                <button onClick={() => {
                  dispatch(removeOption(option.id));
                  setOptions(options.filter((opt) => opt.id !== option.id));
                }}>
                  Remove
                </button>
              </li>
            ))
          }
        </ul>
        <WheelElement numberOfElements={numberOfElements} />
      </div>
    </StyledForm>
  );

});
