import { progressMeta } from "./meta";
import progressCode from "./CustomProgress.tsx?raw";
import progressCodeJs from "./CustomProgress.tsx?jsx-raw";
import { progressExamples } from "./examples";
import { CustomProgress, CustomProgressProps } from "./CustomProgress";
import { ComponentInfo } from "@/types/component.types";

const progressComponent: ComponentInfo<CustomProgressProps> = {
  id: "progress",
  Component: CustomProgress,
  ...progressMeta,
  code: progressCode,
  codeJs: progressCodeJs,
  examples: progressExamples,
};

export default progressComponent;
