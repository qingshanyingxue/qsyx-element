import Button from "./Button.vue";
import { withInstall } from "@qsyx-element/utils";
console.log("withInstall",withInstall);

export const QsyxButton = withInstall(Button);
console.log("QsyxButton",QsyxButton);
