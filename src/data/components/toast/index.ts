import { toastMeta } from "./meta";
import toastCode from "./CustomToast.tsx?raw";
import toastCodeJs from "./CustomToast.tsx?jsx-raw";
import { toastExamples } from "./examples";
import { CustomToast, CustomToastProps } from "./CustomToast";
import { ComponentInfo } from "@/types/component.types";

const toastComponent: ComponentInfo<CustomToastProps> = {
  id: "toast",
  Component: CustomToast,
  ...toastMeta,
  code: toastCode,
  codeJs: toastCodeJs,
  examples: toastExamples,
};

export default toastComponent;
