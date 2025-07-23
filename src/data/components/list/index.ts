import { listMeta } from "./meta";
import listCode from "./examples?raw";
import { listExamples } from "./examples";
import { CustomList, CustomListProps } from "./CustomList";
import {
  // ComponentInfo,
  ComponentInfoWithComponent,
} from "@/types/component.types";

export const listComponent: ComponentInfoWithComponent<CustomListProps> = {
  id: "list1",
  ...listMeta,
  code: listCode,
  component: CustomList,
  examples: listExamples,
};
