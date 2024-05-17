const Input = ({ disabled = false, className, labelInput, ...props }) => (
  <input
    disabled={disabled}
    className={`${className} w-full border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-10 2xl:h-12 rounded-md text-xs 2xl:text-base font-light`}
    {...props}
  />
);

export default Input;
