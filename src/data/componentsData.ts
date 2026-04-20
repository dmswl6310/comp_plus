// import { ComponentInfo } from "@/types/component.types";
import { ComponentInfo } from "@/types/component.types";
import { buttonComponent } from "./components/button";
import {
  CustomButton,
  CustomButtonProps,
} from "./components/button/CustomButton";
import { listComponent } from "./components/list";
import { CustomList, CustomListProps } from "./components/list/CustomList";
import { badgeComponent } from "./components/badge";
import { CustomBadge, CustomBadgeProps } from "./components/badge/CustomBadge";
import { inputComponent } from "./components/input";
import { CustomInput, CustomInputProps } from "./components/input/CustomInput";
import { cardComponent } from "./components/card";
import { CustomCard, CustomCardProps } from "./components/card/CustomCard";

export const componentsData: ComponentInfoUnion[] = [
  buttonComponent,
  listComponent,
  badgeComponent,
  inputComponent,
  cardComponent,
];

export const componentMap = { 
  button1: CustomButton, 
  list: CustomList,
  badge: CustomBadge,
  input: CustomInput,
  card: CustomCard
};

export type ComponentTypeMap = {
  button1: CustomButtonProps;
  list: CustomListProps;
  badge: CustomBadgeProps;
  input: CustomInputProps;
  card: CustomCardProps;
};

export type ComponentInfoUnion =
  | ComponentInfo<CustomButtonProps>
  | ComponentInfo<CustomListProps>
  | ComponentInfo<CustomBadgeProps>
  | ComponentInfo<CustomInputProps>
  | ComponentInfo<CustomCardProps>;
