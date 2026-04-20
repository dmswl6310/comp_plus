import thumbnail from "@assets/list-thumbnail.png"; // Reusing placeholder

export const cardMeta = {
  name: "Card",
  description: "연관된 정보들을 모아서 보여주는 고급스러운 박스 형태의 레이아웃입니다.",
  tags: ["layout", "container", "surface"],
  updatedAt: new Date(),
  image: thumbnail,
  propControls: {
    title: { type: "string" },
    description: { type: "string" },
    footerText: { type: "string" }
  }
};
