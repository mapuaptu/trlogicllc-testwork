<template>
  <div :class="$style.home">
    <Button
      icon="plus-outline"
      :class="$style.button"
      @click.native="addNote"
    >
      Add todo
    </Button>

    <div>
      <div
        v-for="(item, index) in notes"
        :key="index"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
