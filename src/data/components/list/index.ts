import { listMeta } from "./meta";
import listCode from "./examples?raw";
import { listExamples } from "./examples";
import { CustomList, CustomListProps } from "./CustomList";
import { ComponentInfo } from "@/types/component.types";

export const listComponent: ComponentInfo<CustomListProps> = {
  id: "list1",
  ...listMeta,
  code: listCode,
  component: CustomList,
  examples: listExamples,
};
