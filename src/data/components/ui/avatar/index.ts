import { avatarMeta } from "./meta";
import avatarCode from "./CustomAvatar.tsx?raw";
import avatarCodeJs from "./CustomAvatar.tsx?jsx-raw";
import { avatarExamples } from "./examples";
import { CustomAvatar, CustomAvatarProps } from "./CustomAvatar";
import { ComponentInfo } from "@/types/component.types";

const avatarComponent: ComponentInfo<CustomAvatarProps> = {
  id: "avatar",
  Component: CustomAvatar,
  ...avatarMeta,
  code: avatarCode,
  codeJs: avatarCodeJs,
  examples: avatarExamples,
};

export default avatarComponent;
