import { drawerMeta } from "./meta";
import code from "./CustomDrawer.tsx?raw";
import codeJs from "./CustomDrawer.tsx?jsx-raw";
import { drawerExamples } from "./examples";
import { CustomDrawer, CustomDrawerProps } from "./CustomDrawer";
import { ComponentInfo } from "@/types/component.types";

const drawerComponent: ComponentInfo<CustomDrawerProps> = {
  id: "drawer",
  Component: CustomDrawer,
  ...drawerMeta,
  updatedAt: new Date("2026-05-14"),
  code,
  codeJs,
  examples: drawerExamples,
};

export default drawerComponent;
