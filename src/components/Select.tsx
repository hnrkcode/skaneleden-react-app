import { useId } from "react";

interface SelectProps {
  name: string;
  defaultValue: string;
  onSelect: (value: string) => void;
  options: string[] | number[];
  optionFunc?: (value: string) => string;
}

export default function Select({
  name,
  defaultValue,
  onSelect,
  options,
  optionFunc,
}: SelectProps) {
  const selectId = useId();
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div>
      <label htmlFor={selectId}>{capitalizedName}</label>
      <select
        name={name}
        id={selectId}
        defaultValue={defaultValue}
        onChange={(event) => onSelect(event.target.value)}
        className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1"
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {optionFunc ? optionFunc(option.toString()) : option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
