import React, { useCallback } from "react";
import { useRef } from "react";

interface CheckboxProps {
  value: boolean;
  onChange: (value: any) => void;
  name?: string;
  label?: string;
}

const Checkbox = ({ value, onChange, label, name }: CheckboxProps) => {
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = name
        ? { [e.target.name]: e.target.checked }
        : e.target.checked;
      onChange(value);
    },
    [onChange, name]
  );

  const checkboxRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      {label ? <label htmlFor="">{label}</label> : null}
      <input
        ref={checkboxRef}
        type="checkbox"
        checked={value}
        name="isBrush"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Checkbox;
