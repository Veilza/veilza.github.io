<template>
    <div :class="$style['blurb']">
        The default page for stuffs.
        <br/><br/>
        More things will go here eventually, but for now, have a butterfly!
    </div>

    <div :class="$style['butterfly']">
        <img :src="butterfly"/>
    </div>
</template>

<style src="./home.css" module></style>
<script src="./home.js"></script>
