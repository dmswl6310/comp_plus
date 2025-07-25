import { listMeta } from "./meta";
import listCode from "./examples?raw";
import { listExamples } from "./examples";
import { CustomListProps } from "./CustomList";
import { ComponentInfo } from "@/types/component.types";

export const listComponent: ComponentInfo<CustomListProps> = {
  id: "list",
  ...listMeta,
  code: listCode,
  examples: listExamples,
};
