import listThumbnail from "@assets/list-thumbnail-new.png";

export const listMeta = {
  name: "List",
  description: "나열되는 요소입니다.",
  tags: ["form", "basic"],
  updatedAt: new Date("2025-07-07"),
  image: listThumbnail,
  propControls: {
    first: { type: "string" },
    second: { type: "string" },
    third: { type: "string" },
    fourth: { type: "string" }
  }
};
