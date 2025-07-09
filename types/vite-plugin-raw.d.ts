declare module "vite-plugin-raw" {
  import { Plugin } from "vite";

  interface RawPluginOptions {
    fileRegex?: RegExp;
  }

  export default function rawPlugin(options?: RawPluginOptions): Plugin;
}
