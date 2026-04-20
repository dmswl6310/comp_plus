import thumbnail from "@assets/progress-thumbnail.png";
import { PropControl } from "@/types/component.types";

export const progressMeta = {
  name: "Progress",
  description: "작업 진행률이나 완료 상태를 시각적으로 보여주는 바 컴포넌트입니다.",
  tags: ["feedback", "display", "indicator"],
  updatedAt: new Date(),
  image: thumbnail,
  propControls: {
    label: { type: "string" as PropControl["type"] },
    value: { type: "string" as PropControl["type"] },
    color: { type: "select" as PropControl["type"], options: ["blue", "green", "indigo", "amber"] },
  }
};
