<template>
  <div :class="$style.button">
    <span>
      <slot />
    </span>

    <Icon
      v-if="icon"
      :icon="icon"
      fill="#14b6bd"
      :class="$style.icon"
    />
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
