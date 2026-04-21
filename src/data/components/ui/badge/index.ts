import { badgeMeta } from "./meta";
import badgeCode from "./CustomBadge.tsx?raw";
import badgeCodeJs from "./CustomBadge.tsx?jsx-raw";
import { badgeExamples } from "./examples";
import { CustomBadge, CustomBadgeProps } from "./CustomBadge";
import { ComponentInfo } from "@/types/component.types";

const badgeComponent: ComponentInfo<CustomBadgeProps> = {
  id: "badge",
  Component: CustomBadge,
  ...badgeMeta,
  code: badgeCode,
  codeJs: badgeCodeJs,
  examples: badgeExamples,
};

export default badgeComponent;
