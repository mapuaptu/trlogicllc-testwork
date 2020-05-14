<template>
  <div :class="$style.home">
    <div :class="$style.controls">
      <Button
        icon="plus-outline"
        @click.native="addNote"
      >
        Add todo
      </Button>

      <Button
        icon="delete-outline"
        @click.native="deleteAllNotes"
      >
        Delete all
      </Button>
    </div>

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
