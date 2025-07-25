import { buttonMeta } from "./meta";
import buttonCode from "./CustomButton.tsx?raw";
import { buttonExamples } from "./examples";
import { CustomButtonProps } from "./CustomButton";
import { ComponentInfo } from "@/types/component.types";

export const buttonComponent: ComponentInfo<CustomButtonProps> = {
  id: "button1",
  ...buttonMeta,
  code: buttonCode,
  examples: buttonExamples,
};
