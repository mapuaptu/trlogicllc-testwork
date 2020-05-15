<template>
  <div :class="[$style.todo, value && $style['todo--complete']]">
    <div :class="$style.main">
      <div :class="$style.complete">
        <input
          type="checkbox"
          :checked="value"
          :disabled="disabled"
          @input="onInput"
        >
      </div>

      <div :class="[$style.content, value && $style['content--complete']]">
        <slot />
      </div>
    </div>

    <div
      v-if="!disabled"
      :class="$style.controls"
    >
      <Icon icon="pencil-outline" />
      <Icon icon="delete-outline" />
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
