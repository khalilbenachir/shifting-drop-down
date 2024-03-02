import { PropsWithChildren } from "react";
import { BiChevronDown } from "react-icons/bi";
import cs from "classnames";

type TTab = PropsWithChildren & {
  selected: number | null;
  tab: number;
  onSelect: (val: number | null) => void;
};

const Tab = ({ selected, tab, children, onSelect }: TTab) => {
  return (
    <button
      id={`id-tab-${tab}`}
      className={cs(
        "flex justify-center items-center gap-0.5 py-1.5 px-3 rounded-full text-sm text-neutral-400 transition-colors",
        {
          "bg-neutral-800 text-neutral-100": tab === selected,
        }
      )}
      onMouseEnter={() => onSelect(tab)}
      onClick={() => onSelect(tab)}
    >
      <span>{children}</span>
      <BiChevronDown
        className={cs("w-8 h-8 transition-transform", {
          "rotate-180": tab === selected,
        })}
      />
    </button>
  );
};

export default Tab;
