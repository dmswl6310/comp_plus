import { inputMeta } from "./meta";
import inputCode from "./CustomInput.tsx?raw";
import inputCodeJs from "./CustomInput.tsx?jsx-raw";
import { inputExamples } from "./examples";
import { CustomInput, CustomInputProps } from "./CustomInput";
import { ComponentInfo } from "@/types/component.types";

const inputComponent: ComponentInfo<CustomInputProps> = {
  id: "input",
  Component: CustomInput,
  ...inputMeta,
  code: inputCode,
  codeJs: inputCodeJs,
  examples: inputExamples,
};

export default inputComponent;
