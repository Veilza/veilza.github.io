<template>
    <div :class="$style['project-list']">
        <div :class="$style['project-item']">
            <a href="https://github.com/WoD5E-Developers/wod5e" target="_blank">
                <img :src="WOD5EBanner"/>
            </a>
        </div>
        <div :class="$style['project-item']">
            <a href="https://github.com/Veilza/settlement-sheets" target="_blank">
                <img :src="SettlementSheetsBanner"/>
            </a>
        </div>
        <div :class="$style['project-item']">
            <a href="https://github.com/Veilza/show-token-art" target="_blank">
                <img :src="ShowTokenArtBanner"/>
            </a>
        </div>
        <div :class="$style['project-item']">
            <div :class="$style['textonly']">
                <router-link :to="'/projects/bobconverter'">Linear RGB to sRGB hex converter for Beasts of Bermuda</router-link>
            </div>
        </div>
    </div>
</template>

<style src="./projects.css" module></style>
<script src="./projects.js"></script>
