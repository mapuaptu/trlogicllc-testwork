<template>
  <div
    :class="$style.modal"
    class="modal"
  >
    <div class="modal-header">
      Edit Todo
    </div>

    <div class="modal-content">
      <input
        ref="input"
        v-model="todoName"
        type="text"
        placeholder="Enter todo name"
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
