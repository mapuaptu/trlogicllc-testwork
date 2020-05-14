<template>
  <div
    :class="$style.modal"
    class="modal"
  >
    <div class="modal-header">
      Cancel edit note
    </div>

    <div class="modal-content">
      Are you sure you want to cancel edit note
    </div>

    <div class="modal-footer">
      <Button
        :fill="true"
        @click.native="onNo"
      >
        No
      </Button>

      <Button @click.native="onYes">
        Yes
      </Button>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
