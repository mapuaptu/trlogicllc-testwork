<template>
  <div :class="$style.home">
    <div :class="$style.controls">
      <Button
        icon="plus-outline"
        :fill="true"
        @click.native="addNote"
      >
        Add note
      </Button>

      <!-- TEST BUTTON FOR DELETE ALL NOTES -->

      <!-- <Button
        icon="delete-outline"
        @click.native="deleteAllNotes"
      >
        Delete all notes
      </Button> -->
    </div>

    <div :class="$style.content">
      <Note
        v-for="item in notes"
        :key="item.id"
        :title="item.name"
        @delete="deleteNote(item)"
        @edit="editNote(item)"
      >
        <template v-if="item.todos.length">
          <div
            v-for="todo in item.todos"
            :key="todo.id"
          >
            {{ todo }}
          </div>
        </template>

        <template v-else>
          no todos yet
        </template>
      </Note>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
