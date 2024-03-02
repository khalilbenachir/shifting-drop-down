import { TAB } from "@/types";

export const tabs: TAB[] = [
  { id: 1, title: "Products", component: () => <div>products</div> },
  { id: 2, title: "Pricing", component: () => <div>Pricing</div> },
  { id: 3, title: "Blog", component: () => <div>Blog</div> },
];
