<template>
  <div id="app">
    <modals-container />

    <div class="container">
      <div class="top">
        <div class="headline">
          <router-link :to="{name: 'home'}">
            Note builder
          </router-link>
        </div>
        <router-view />
      </div>

      <div class="bottom">
        <Footer github-link="https://github.com/" />
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" module></style>
