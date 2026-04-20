import { inputMeta } from "./meta";
import inputCode from "./CustomInput.tsx?raw";
import { inputExamples } from "./examples";
import { CustomInputProps } from "./CustomInput";
import { ComponentInfo } from "@/types/component.types";

export const inputComponent: ComponentInfo<CustomInputProps> = {
  id: "input",
  ...inputMeta,
  code: inputCode,
  examples: inputExamples,
};
