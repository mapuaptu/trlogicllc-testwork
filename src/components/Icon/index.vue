<template>
  <div :class="$style.icon">
    <svg
      :width="width"
      :height="height"
      :viewbox="`0 0 ${width} ${height}`"
    >
      <path
        :d="iconPath"
        :fill="fill"
      />
    </svg>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
