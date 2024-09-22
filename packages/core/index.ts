import { makeInstaller } from "@qsyx-element/utils";
import components from "./components";
import '@qsyx-element/theme/index.css'
const installer = makeInstaller(components);

export * from "@qsyx-element/components";
export default installer;