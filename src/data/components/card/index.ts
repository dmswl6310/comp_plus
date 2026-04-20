import { cardMeta } from "./meta";
import cardCode from "./CustomCard.tsx?raw";
import cardCodeJs from "./CustomCard.tsx?jsx-raw";
import { cardExamples } from "./examples";
import { CustomCard, CustomCardProps } from "./CustomCard";
import { ComponentInfo } from "@/types/component.types";

const cardComponent: ComponentInfo<CustomCardProps> = {
  id: "card",
  Component: CustomCard,
  ...cardMeta,
  code: cardCode,
  codeJs: cardCodeJs,
  examples: cardExamples,
};

export default cardComponent;
