import { toggleMeta } from "./meta";
import toggleCode from "./CustomToggle.tsx?raw";
import toggleCodeJs from "./CustomToggle.tsx?jsx-raw";
import { toggleExamples } from "./examples";
import { CustomToggle, CustomToggleProps } from "./CustomToggle";
import { ComponentInfo } from "@/types/component.types";

const toggleComponent: ComponentInfo<CustomToggleProps> = {
  id: "toggle",
  Component: CustomToggle,
  ...toggleMeta,
  code: toggleCode,
  codeJs: toggleCodeJs,
  examples: toggleExamples,
};

export default toggleComponent;
