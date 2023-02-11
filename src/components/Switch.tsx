import { ReactNode } from "react";

interface SwitchProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: ReactNode;
  id: string;
}

const classes = [
  "relative shrink-0 w-7 h-4 pt-px px-px",
  "bg-white checked:bg-[#64605e]",
  "border-transparent rounded-full border border-transparent",
  "ring-1 ring-transparent",
  "transition-colors ease-in-out duration-200",
  "focus:border-[#64605e] focus:ring-[#64605e] focus:ring-color-transparent focus:ring-offset-2 focus:outline-none",
  "appearance-none cursor-pointer",
  "before:inline-block before:w-3 before:h-3 before:bg-[#64605e]",
  "checked:before:bg-gray-200 before:translate-x-0 checked:before:translate-x-full",
  "before:shadow before:rounded-full before:transform before:ring-0",
  "before:transition before:ease-in-out before:duration-200 leading-3",
].join(" ");

function Switch({ id, label, checked, onChange }: SwitchProps): JSX.Element {
  return (
    <div className="flex items-baseline">
      <input
        type="checkbox"
        id={id}
        className={classes}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="text-sm text-gray-500 ml-3">
        {label}
      </label>
    </div>
  );
}

export default Switch;
