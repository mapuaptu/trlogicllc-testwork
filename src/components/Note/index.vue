<template>
  <div :class="$style.note">
    <div :class="$style.title">
      <div>{{ title }}</div>

      <Icon
        icon="delete-outline"
        :class="$style.icon"
        @click.native="$emit('delete')"
      />
    </div>

    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
