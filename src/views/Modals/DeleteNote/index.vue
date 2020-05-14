<template>
  <div
    :class="$style.modal"
    class="modal"
  >
    <div class="modal-header">
      Delete Note
    </div>

    <div class="modal-content">
      Are you sure you want to delete note {{ name }}
    </div>

    <div class="modal-footer">
      <Button
        :fill="true"
        @click.native="onCancel"
      >
        Cancel
      </Button>

      <Button @click.native="onDelete">
        Delete
      </Button>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
