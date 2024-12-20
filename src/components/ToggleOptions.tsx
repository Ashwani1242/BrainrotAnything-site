import { Dispatch, SetStateAction } from "react";

export const ToggleOptions = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
  additionalFunction?: Function
}) => {
  return (
    <button
      onClick={() => {
        setSelected(text);
      }}
      className={`${selected
          ? "text-white bg-blue-400"
          : "text-black hover:bg-black/10 duration-300"
        } text-sm transition-colors px-3 py-1 rounded relative`}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
};
