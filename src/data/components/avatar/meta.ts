import thumbnail from "@assets/avatar-thumbnail.png";
import { PropControl } from "@/types/component.types";

export const avatarMeta = {
  name: "Avatar",
  description: "사용자를 대표하는 아이콘 형태의 프로필 컴포넌트입니다.",
  tags: ["display", "user", "profile"],
  updatedAt: new Date(),
  image: thumbnail,
  propControls: {
    name: { type: "string" as PropControl["type"] },
    size: { type: "select" as PropControl["type"], options: ["sm", "md", "lg"] },
    online: { type: "boolean" as PropControl["type"] },
  }
};
