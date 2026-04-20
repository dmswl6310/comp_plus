import { listMeta } from "./meta";
import listCode from "./CustomList.tsx?raw";
import listCodeJs from "./CustomList.tsx?jsx-raw";
import { listExamples } from "./examples";
import { CustomList, CustomListProps } from "./CustomList";
import { ComponentInfo } from "@/types/component.types";

const listComponent: ComponentInfo<CustomListProps> = {
  id: "list",
  Component: CustomList,
  ...listMeta,
  code: listCode,
  codeJs: listCodeJs,
  examples: listExamples,
};

export default listComponent;
