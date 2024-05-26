<template>
  <div id="app">
    <Navbar/>
    <div :class="$style['page-body']">

    </div>
    <router-view></router-view>
  </div>
</template>

<style src="./template.css" module></style>
<script src="./template.js"></script>
