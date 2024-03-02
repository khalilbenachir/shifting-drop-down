import { motion } from "framer-motion";

import { tabs } from "@/data/tabs";
import { TDirection } from "@/types";

import Bridge from "./bridge";
import Nub from "./nub";

type TContent = {
  selected: number | null;
  direction: TDirection;
};

const Content = ({ direction, selected }: TContent) => {
  return (
    <motion.div
      id="id-overlay"
      className="absolute left-0 top-[calc(100%_+24px_)] w-96 p-4 border border-neutral-600 rounded-lg bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800"
      initial={{
        y: 8,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: 8,
        opacity: 0,
      }}
    >
      <Bridge />
      <Nub selected={selected} />
      {tabs.map((tab) => {
        const { component: Component } = tab;
        return (
          <div className="overflow-hidden" key={tab.id}>
            {tab.id === selected && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: direction === "l" ? 100 : direction === "r" ? -100 : 0,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: "0.25", ease: "easeInOut" }}
              >
                <Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

export default Content;
