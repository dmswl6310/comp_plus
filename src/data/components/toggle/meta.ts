import thumbnail from "@assets/toggle-thumbnail.png";
import { PropControl } from "@/types/component.types";

export const toggleMeta = {
  name: "Toggle",
  description: "켜짐/꺼짐 상태를 전환하는 스위치 컴포넌트입니다.",
  tags: ["form", "input", "interaction"],
  updatedAt: new Date(),
  image: thumbnail,
  propControls: {
    label: { type: "string" as PropControl["type"] },
    checked: { type: "boolean" as PropControl["type"] },
  }
};
