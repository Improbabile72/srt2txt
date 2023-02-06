import React from "react";

const classes = [
  "rounded-md inline-flex justify-center items-center gap-2 py-3 px-4",
  "bg-transparent text-[#64605e] border-2 border-[#64605e]",
  "hover:bg-[#64605e] hover:text-white",
  "focus:outline-none focus:ring-2 focus:ring-[#64605e] focus:ring-offset-1",
  "font-semibold text-sm",
  "transition-all",
].join(" ");

function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): JSX.Element {
  const { className, ...otherProps } = props;
  return <button className={classes} {...otherProps} />;
}

export default Button;
