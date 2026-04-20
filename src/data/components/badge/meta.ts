import thumbnail from "@assets/badge-thumbnail.png";
import { PropControl } from "@/types/component.types";

export const badgeMeta = {
  name: "Badge",
  description: "짧고 간결한 정보나 상태를 표시하는 작은 디자인 요소입니다.",
  tags: ["status", "indicator", "tag"],
  updatedAt: new Date(),
  image: thumbnail,
  propControls: {
    text: { type: "string" as PropControl["type"] },
    color: { type: "select" as PropControl["type"], options: ["blue", "red", "green", "gray"] },
    variant: { type: "select" as PropControl["type"], options: ["solid", "outline"] }
  }
};
