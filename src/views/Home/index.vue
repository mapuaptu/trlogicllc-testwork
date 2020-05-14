<template>
  <div :class="$style.home">
    <div :class="$style.controls">
      <Button
        icon="plus-outline"
        @click.native="addNote"
      >
        Add note
      </Button>

      <Button
        icon="delete-outline"
        @click.native="deleteAllNotes"
      >
        Delete all notes
      </Button>
    </div>

    <div :class="$style.content">
      <Note
        v-for="item in notes"
        :key="item.id"
        :title="item.name"
        @delete="deleteNote(item.id)"
      >
        todo item will be here
      </Note>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
