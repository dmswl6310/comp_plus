import { ComponentInfo } from "@/types/component.types";
import checkoutPageCode from "./CustomCheckoutPage.tsx?raw";
import checkoutPageCodeJs from "./CustomCheckoutPage.tsx?jsx-raw";
import { CustomCheckoutPage, CustomCheckoutPageProps } from "./CustomCheckoutPage";
import { checkoutPageExamples } from "./examples";
import { checkoutPageMeta } from "./meta";

const checkoutPageComponent: ComponentInfo<CustomCheckoutPageProps> = {
  id: "checkout-page",
  Component: CustomCheckoutPage,
  ...checkoutPageMeta,
  code: checkoutPageCode,
  codeJs: checkoutPageCodeJs,
  examples: checkoutPageExamples,
};

export default checkoutPageComponent;
