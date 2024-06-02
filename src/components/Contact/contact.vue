<template>
    <div :class="$style['socials']">
        <div :class="$style['x']">
            <font-awesome-icon :icon="['fab', 'twitter']"/>
            <a href="https://x.com/VeilzaKinsemi" target="_blank">VeilzaKinsemi</a> @ X
        </div>

        <div :class="$style['discord']">
            <font-awesome-icon :icon="['fab', 'discord']"/>
            veilza @ Discord
        </div>

        <div :class="$style['youtube']">
            <font-awesome-icon :icon="['fab', 'youtube']"/>
            <a href="https://www.youtube.com/@VeilzaKinsemi" target="_blank">VeilzaKinsemi</a> @ YouTube
        </div>

        <div :class="$style['twitch']">
            <font-awesome-icon :icon="['fab', 'twitch']"/>
            <a href="https://www.twitch.tv/Veilza" target="_blank">Veilza</a> @ Twitch
        </div>

        <div :class="$style['artistsnclients']">
            <font-awesome-icon :icon="['fas', 'palette']"/>
            <a href="https://artistsnclients.com/people/Veilza" target="_blank">Veilza</a> @ Artists&Clients
        </div>

        <div :class="$style['github']">
            <font-awesome-icon :icon="['fab', 'github']"/>
            <a href="https://github.com/Veilza" target="_blank">Veilza</a> @ GitHub
        </div>
    </div>
</template>

<style src="./contact.css" module></style>
<script src="./contact.js"></script>
