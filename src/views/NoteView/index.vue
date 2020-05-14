<template>
  <div :class="$style.note">
    <div :class="$style.title">
      <div :class="$style.text">
        {{ note.name }}
      </div>

      <div :class="$style.controls">
        <Button
          icon="delete-outline"
          @click.native="deleteNote(note)"
        >
          Delete note
        </Button>
      </div>
    </div>

    <div :class="$style.content">
      content
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
