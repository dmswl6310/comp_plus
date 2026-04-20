import { CustomInputProps } from "./CustomInput";

export const inputExamples: CustomInputProps[] = [
  { placeholder: "이메일을 입력하세요", type: "email", disabled: false },
  { placeholder: "비밀번호 (가려짐)", type: "password", disabled: false },
  { placeholder: "비활성화된 입력창", type: "text", disabled: true },
];
