<template>
    <div :class="$style['blurb']">
        If for any reason you'd like to donate to me, you can through any of the sites below! Of course, I won't ever beg for donations or the like, but if people want the option to offer them, here it is! It nonetheless helps me out to keep working on projects that I love and making them better.
    </div>

    <div :class="$style['donation']">
        <div :class="$style['patreon']">
            <font-awesome-icon :icon="['fab', 'patreon']"/>
            <a href="https://www.patreon.com/veilza" target="_blank">Veilza</a> @ Patreon
        </div>

        <div :class="$style['kofi']">
            <font-awesome-icon :icon="['fas', 'mug-hot']"/>
            <a href="https://ko-fi.com/veilza" target="_blank">Veilza</a> @ Ko-fi
        </div>

        <div :class="$style['paypal']">
            <font-awesome-icon :icon="['fab', 'paypal']"/>
            <a href="https://www.paypal.me/Veilza" target="_blank">Veilza</a> @ Paypal
        </div>
    </div>
</template>

<style src="./donations.css" module></style>
<script src="./donations.js"></script>
