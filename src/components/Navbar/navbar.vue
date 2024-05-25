<template>
    <nav :class="$style.navbar">
        <img :src="navbarimg"/>
        <ul :class="$style['nav-links']">
            <li v-for="link in links" :key="link.text"><a :href="link.href">{{ link.text }}</a></li>
        </ul>
        <div :class="$style['menu-icon']" @click="toggleMenu">&#9776;</div>
        <div :class="[$style['waffle-menu'], { [$style.show]: isMenuVisible }]" id="waffleMenu">
            <a v-for="link in links" :key="link.text" :href="link.href">{{ link.text }}</a>
        </div>
    </nav>
</template>

<style src="./navbar.css" module></style>
<script src="./navbar.js"></script>
