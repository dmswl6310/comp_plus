import { cardMeta } from "./meta";
import cardCode from "./CustomCard.tsx?raw";
import { cardExamples } from "./examples";
import { CustomCardProps } from "./CustomCard";
import { ComponentInfo } from "@/types/component.types";

export const cardComponent: ComponentInfo<CustomCardProps> = {
  id: "card",
  ...cardMeta,
  code: cardCode,
  examples: cardExamples,
};
