import { buttonMeta } from "./meta";
import buttonCode from "./CustomButton.tsx?raw";
import { buttonExamples } from "./examples";
import { ComponentInfoWithComponent } from "@/types/component.types";
import { CustomButton, CustomButtonProps } from "./CustomButton";

export const buttonComponent: ComponentInfoWithComponent<CustomButtonProps> = {
  id: "button1",
  ...buttonMeta,
  code: buttonCode,
  examples: buttonExamples,
  component: CustomButton,
};
