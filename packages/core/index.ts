import { makeInstaller } from "@qsyx-element/utils";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import components from "./components";
import '@qsyx-element/theme/index.css'
const installer = makeInstaller(components);
library.add(fas)
export * from "@qsyx-element/components";
export default installer;