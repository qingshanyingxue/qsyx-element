<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { BUTTON_GROUP_CTX_KEY } from "./constants";
import {defineSlots,ref,defineExpose,withDefaults,defineProps,defineOptions,defineEmits,computed,inject} from 'vue'
import { throttle } from "lodash-es";
import QsyxIcon from '../Icon/Icon.vue'
defineOptions({
  name: "QsyxButton",
});
const emits = defineEmits<ButtonEmits>();
const props=withDefaults(defineProps<ButtonProps>(),{
    tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
  disabled:false
})
const slots = defineSlots();
const _ref = ref<HTMLButtonElement>();
const buttonGroupCtx = inject(BUTTON_GROUP_CTX_KEY, void 0);
const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px",
}));
const size = computed(() => buttonGroupCtx?.size ?? props.size ?? "");
const type = computed(() => buttonGroupCtx?.type ?? props.type ?? "");
/**
 * Button.vue
 * Button.test.tsx
 * types.ts
 * style.css
 * constants.ts
 * 
 */
const handleBtnClick = (e: MouseEvent) => {
  emits("click", e);
};
const disabled = computed(
  () => props.disabled || buttonGroupCtx?.disabled || false
)

// ,{trailing:false}节流
const handlBtneCLickThrottle = throttle(handleBtnClick, props.throttleDuration,{trailing:false});
defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  size,
  type,
});
</script>

<template>
 <component
    :is="tag"
    ref="_ref"
    class="er-button"
    :type="tag==='button'?nativeType:void 0"
    :disabled="disabled||loading?true:void 0"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="
      (e: MouseEvent) =>
        useThrottle ? handlBtneCLickThrottle(e) : handleBtnClick(e)
    "
    :autofocus="autofocus"
    >
    <template v-if="loading">
      <slot name="loading">
        <qsyx-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" :style="iconStyle" size="1px"></qsyx-icon>
      </slot>
    </template>
    <qsyx-icon v-if="icon &&!loading" :icon="icon" size="1px" :style="iconStyle"/>
    <slot></slot>
    </component>
</template>
<style scoped>
@import './style.css';
</style>
