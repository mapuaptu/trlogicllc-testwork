<template>
  <div
    :class="[$style.button, fill && $style['button--fill'], disabled && $style['button--disabled']]"
  >
    <span>
      <slot />
    </span>

    <Icon
      v-if="icon"
      :icon="icon"
      :fill="fill ? '#fff': '#14b6bd'"
      :class="$style.icon"
    />
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
