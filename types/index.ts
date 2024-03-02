export type TDirection = null | "l" | "r";

export type TAB = {
  id: number;
  title: string;
  component: () => JSX.Element;
};
