<template>
  <div
    :class="$style.modal"
    class="modal"
  >
    <div class="modal-header">
      {{ title }}
    </div>

    <div class="modal-content">
      <input
        v-model="noteName"
        type="text"
        placeholder="Enter note name"
        class="input"
        @input="message = ''"
      >
      <div
        v-if="message"
        class="message"
      >
        {{ message }}
      </div>
    </div>

    <div class="modal-footer">
      <Button @click.native="onCancel">
        Cancel
      </Button>

      <Button @click.native="onSave">
        Save
      </Button>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
