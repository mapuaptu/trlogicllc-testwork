<template>
  <div :class="$style.note">
    <div :class="$style.title">
      <div>{{ title }}</div>

      <div :class="$style.controls">
        <Icon
          icon="pencil-outline"
          :class="$style.icon"
          @click.native="$emit('edit')"
        />

        <Icon
          icon="delete-outline"
          :class="$style.icon"
          @click.native="$emit('delete')"
        />
      </div>
    </div>

    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
