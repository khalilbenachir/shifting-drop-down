"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { tabs } from "@/data/tabs";
import { TDirection } from "@/types";

import Tab from "./tab";
import Content from "./content";

const Navbar = () => {
  const [selected, setSelected] = useState<number | null>(1);
  const [direction, setDirection] = useState<TDirection>(null);
  const onMouseLeave = () => setSelected(null);

  const onSelect = (val: number | null) => {
    if (typeof val === "number" && typeof selected === "number") {
      setDirection(val > selected! ? "r" : "l");
    } else setDirection(null);

    setSelected(val);
  };

  return (
    <nav className="relative flex gap-6" onMouseLeave={onMouseLeave}>
      {tabs.map((tab) => (
        <Tab key={tab.id} selected={selected} tab={tab.id} onSelect={onSelect}>
          {tab.title}
        </Tab>
      ))}
      {tabs.map((tab) => {
        if (!selected) return null;
        return (
          <AnimatePresence key={tab.id}>
            <Content selected={selected} direction={direction} />
          </AnimatePresence>
        );
      })}
    </nav>
  );
};

export default Navbar;
