// import { ComponentInfo } from "@/types/component.types";
import { ComponentInfo } from "@/types/component.types";
import { buttonComponent } from "./components/button";
import {
  CustomButton,
  CustomButtonProps,
} from "./components/button/CustomButton";
import { listComponent } from "./components/list";
import { CustomList, CustomListProps } from "./components/list/CustomList";

export const componentsData: ComponentInfoUnion[] = [
  buttonComponent,
  listComponent,
];
export const componentMap = { button1: CustomButton, list: CustomList };
export type ComponentTypeMap = {
  button1: CustomButtonProps;
  list: CustomListProps;
};

export type ComponentInfoUnion =
  | ComponentInfo<CustomButtonProps>
  | ComponentInfo<CustomListProps>;
