import thumbnail from "@assets/toast-thumbnail.png";

export const toastMeta = {
  name: "Toast",
  description: "사용자에게 간결한 피드백 메시지를 보여주는 알림 컴포넌트입니다.",
  tags: ["feedback", "notification", "indicator"],
  updatedAt: new Date(),
  image: thumbnail,
  propControls: {
    message: { type: "string" },
    variant: { type: "select", options: ["success", "error", "info", "warning"] },
  }
};
