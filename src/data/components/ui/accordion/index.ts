import { accordionMeta } from "./meta";
import code from "./CustomAccordion.tsx?raw";
import codeJs from "./CustomAccordion.tsx?jsx-raw";
import { accordionExamples } from "./examples";
import { CustomAccordion, CustomAccordionProps } from "./CustomAccordion";
import { ComponentInfo } from "@/types/component.types";

const accordionComponent: ComponentInfo<CustomAccordionProps> = {
  id: "accordion",
  Component: CustomAccordion,
  ...accordionMeta,
  updatedAt: new Date("2026-05-14"),
  code,
  codeJs,
  examples: accordionExamples,
};

export default accordionComponent;
