import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(50);

  useEffect(() => {
    if (!selected) return;
    const tab = document.querySelector(`#id-tab-${selected}`);
    const content = document.querySelector(`#id-overlay`);

    if (!tab || !content) return;

    const tabRect = tab.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();
    const centerTab = tabRect.left + tabRect.width / 2 - contentRect.left;

    setLeft(centerTab);
  }, [selected]);

  return (
    <motion.span
      animate={{ left }}
      transition={{ duration: "0.25", ease: "easeInOut" }}
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 50% 50%, 0% 100%)",
      }}
      className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-neutral-400 bg-neutral-900 rotate-45 rounded-tl"
    ></motion.span>
  );
};

export default Nub;
