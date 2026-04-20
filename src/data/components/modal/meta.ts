import thumbnail from "@assets/modal-thumbnail.png";

export const modalMeta = {
  name: "Modal",
  description: "사용자에게 확인이나 추가 정보를 요청하는 대화상자 컴포넌트입니다.",
  tags: ["overlay", "dialog", "interaction"],
  updatedAt: new Date(),
  image: thumbnail,
  propControls: {
    title: { type: "string" },
    description: { type: "string" },
    confirmText: { type: "string" },
  }
};
