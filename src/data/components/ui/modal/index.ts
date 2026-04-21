import { modalMeta } from "./meta";
import modalCode from "./CustomModal.tsx?raw";
import modalCodeJs from "./CustomModal.tsx?jsx-raw";
import { modalExamples } from "./examples";
import { CustomModal, CustomModalProps } from "./CustomModal";
import { ComponentInfo } from "@/types/component.types";

const modalComponent: ComponentInfo<CustomModalProps> = {
  id: "modal",
  Component: CustomModal,
  ...modalMeta,
  code: modalCode,
  codeJs: modalCodeJs,
  examples: modalExamples,
};

export default modalComponent;
