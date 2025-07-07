import { listMeta } from "./meta";
import { listCode } from "./code";
import { listExamples } from "./examples";

export const listComponent = {
  id: "list1",
  ...listMeta,
  code: listCode,
  examples: listExamples,
};
