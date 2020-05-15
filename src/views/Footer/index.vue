<template>
  <div :class="$style.footer">
    <a
      :href="githubLink"
      target="_blank"
    >
      <Icon
        icon="github"
        fill="#14b6bd"
        :class="$style.icon"
      />
      {{ githubLink }}
    </a>

    <div :class="$style.copyright">
      created by Alex Nikishkin
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
