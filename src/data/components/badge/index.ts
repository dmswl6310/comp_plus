import { badgeMeta } from "./meta";
import badgeCode from "./CustomBadge.tsx?raw";
import { badgeExamples } from "./examples";
import { CustomBadgeProps } from "./CustomBadge";
import { ComponentInfo } from "@/types/component.types";

export const badgeComponent: ComponentInfo<CustomBadgeProps> = {
  id: "badge",
  ...badgeMeta,
  code: badgeCode,
  examples: badgeExamples,
};
