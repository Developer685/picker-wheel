import { nanoid } from "@reduxjs/toolkit";
import { forwardRef, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addOption, removeOption } from "../optionSlice";
import { StyledForm } from "./styled";
import { Wheel } from "./Wheel";
import { Input } from "./Input/styled";

export const Form = forwardRef((props, ref) => {

  const [options, setOptions] = useState([
    { id: nanoid(), content: "Option 1" },
    { id: nanoid(), content: "Option 2" },
    { id: nanoid(), content: "Option 3" }
  ]);

  const [newOption, setNewOption] = useState("");
  const inputRef = useRef(null);
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

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Wheel
        numberOfElements={options.length > 0 ? options.length : 1}
        options={options}
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
          {options.map((option) => (
            <li key={option.id} style={{ listStyle: "none" }}>
              {option.content}
              <button onClick={() => {
                dispatch(removeOption(option.id));
                setOptions(options.filter((opt) => opt.id !== option.id));
              }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </StyledForm>
  );

});
