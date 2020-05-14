<template>
  <div :class="$style.note">
    <div
      v-click-outside="hideEditMode"
      :class="$style.title"
    >
      <div
        v-if="!editMode"
        :class="$style.text"
      >
        {{ note.name }}
      </div>

      <input
        v-else
        ref="input"
        :value="note.name"
        type="text"
        :class="$style.input"
        @input="onNameInput"
      >

      <div :class="$style.controls">
        <Button
          icon="pencil-outline"
          @click.native="editName"
        >
          {{ editMode ? 'Save name': 'Edit name' }}
        </Button>

        <Button
          icon="delete-outline"
          @click.native="deleteNote(note)"
        >
          Delete note
        </Button>
      </div>
    </div>

    <div :class="$style.content">
      <Button
        :fill="true"
        icon="plus-outline"
        :class="$style.button"
        @click.native="createTodo"
      >
        Add todo
      </Button>

      <div :class="$style.todos">
        <div
          v-for="item in note.todos"
          :key="item.id"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div :class="$style.footer">
      <Button @click.native="onCancel">
        Cancel
      </Button>

      <Button
        :fill="true"
        @click.native="onSave"
      >
        Save
      </Button>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
