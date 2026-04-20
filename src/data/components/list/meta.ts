import listThumbnail from "@assets/list-thumbnail-new.png";
import { PropControl } from "@/types/component.types";

export const listMeta = {
  name: "List",
  description: "나열되는 요소입니다.",
  tags: ["form", "basic"],
  updatedAt: new Date("2025-07-07"),
  image: listThumbnail,
  propControls: {
    first: { type: "string" as PropControl["type"] },
    second: { type: "string" as PropControl["type"] },
    third: { type: "string" as PropControl["type"] },
    fourth: { type: "string" as PropControl["type"] }
  }
};
