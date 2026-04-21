import thumbnail from "@assets/input-thumbnail.png";
import { PropControl } from "@/types/component.types";

export const inputMeta = {
  name: "Input",
  description: "사용자가 텍스트 데이터를 입력할 수 있는 필드 컴포넌트입니다.",
  tags: ["form", "input", "basic"],
  aliases: ["인풋", "입력", "텍스트", "폼"],
  updatedAt: new Date(),
  image: thumbnail,
  propControls: {
    placeholder: { type: "string" as PropControl["type"] },
    type: { type: "select" as PropControl["type"], options: ["text", "password", "email"] },
    disabled: { type: "boolean" as PropControl["type"] }
  }
};
