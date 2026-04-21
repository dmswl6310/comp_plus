import { ComponentInfo } from "@/types/component.types";
import newsletterCtaCode from "./CustomNewsletterCta.tsx?raw";
import newsletterCtaCodeJs from "./CustomNewsletterCta.tsx?jsx-raw";
import { CustomNewsletterCta, CustomNewsletterCtaProps } from "./CustomNewsletterCta";
import { newsletterCtaExamples } from "./examples";
import { newsletterCtaMeta } from "./meta";

const newsletterCtaComponent: ComponentInfo<CustomNewsletterCtaProps> = {
  id: "newsletter-cta",
  Component: CustomNewsletterCta,
  ...newsletterCtaMeta,
  code: newsletterCtaCode,
  codeJs: newsletterCtaCodeJs,
  examples: newsletterCtaExamples,
};

export default newsletterCtaComponent;
