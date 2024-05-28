<template>
    <div :class="$style['panels']">
        <div :class="$style['panel']">
            <div :class="$style['panel-title']">Lil' History</div>
            <div :class="$style['panel-body']">
                Hey there! My name is Veilza, and I'm a hobbyist software developer and have been for the past decade. Recently I've also gotten into game development and vtubing, too!
                <br/><br/>
                I've been into programming for a <b>long</b> time, since I was 10, making little websites. Across all this time, I've gotten pretty okay at making things, and my passion for software has only blossomed more and more the more stuff I make!
                <br/><br/>
                I've done lots of things, mostly web development-related, but I've made software like chatbots and helpful little programs too (mostly lost to the sands of time nowadays, before I used version control systems.)
                <br/><br/>
                My very first big collaborative project was working on the <a href="https://github.com/Rayji96/foundry-V5" target="_blank">World of Darkness 5e</a> system for <a href="https://foundryvtt.com/packages/vtm5e/" target="_blank">FoundryVTT</a>, adding support for Werewolf the Apocalypse 5th edition that had just released. Since then, I've been its lead developer and helped to add a ton of new features! And clean up a lot of old code along the way.
                <br/><br/>
                I've done various contributions to other projects and made a few other modules of my own for Foundry too, but I would say 80% of what I do is solo projects. Not to say that I don't like working with people! But I like to push myself and I can rarely ask that of other people.
            </div>
        </div>
        <img :src="chibi"/>
        <div :class="$style['panel']">
            <div :class="$style['panel-title']">Programming Experience</div>
            <ul :class="$style['panel-body']">
                <li><span :class="$style['item-name']">JavaScript</span> <span :class="$style['item-description']">My main language of choice. Various libraries and frameworks, including Node.js, Vue, React, and Angular. This entire website is made with Node and Vue!</span></li>
                <li><span :class="$style['item-name']">Python</span> <span :class="$style['item-description']">If I were to ever make a big collaborative project, Python would be my go-to. Love its rigid rules.</span></li>
                <li><span :class="$style['item-name']">Ruby</span> <span :class="$style['item-description']">I used Ruby and Ruby on Rails to make websites/chatbots before, very fun to play around with!</span></li>
                <li><span :class="$style['item-name']">GDScript</span> <span :class="$style['item-description']">Since I've started developing games in Godot, I've loved the ease of use of GDScript.</span></li>
                <li><span :class="$style['item-name']">C#</span> <span :class="$style['item-description']">Mainly in the context of game development!</span></li>
                <li><span :class="$style['item-name']">PHP</span> <span :class="$style['item-description']">This was my very first programming language I began with, before Laravel even released. I'm glad Laravel released.</span></li>
            </ul>
        </div>
        <div :class="$style['panel']">
            <div :class="$style['panel-title']">Languages</div>
            <ul :class="$style['panel-body']">
                <li><span :class="$style['item-name']">English</span> <span :class="$style['item-description']">My native language!</span></li>
                <li><span :class="$style['item-name']">Indonesian</span> <span :class="$style['item-description']">I'm not exactly fluent, but I can understand most Indonesian I come across and can speak it a little. Mostly reading and writing for now, though!</span></li>
                <li><span :class="$style['item-name']">Japanese</span> <span :class="$style['item-description']">Actively learning now! I'm not the best but I would say that I'm on a decent learning path to fluency~! (With the eventual goal of moving to Japan.)</span></li>
            </ul>
        </div>
        <div :class="$style['panel']">
            <div :class="$style['panel-title']">Current Time & Schedule</div>
            <ul :class="$style['panel-body']">
                If you ever need to contact me and know my schedule, here's a handy little tool!~
                <br/><br/>
                The current time for me is {{currentTime}}
                <br/><br/>
                As for a <b><i>schedule</i></b>...
                <br/><br/>
                I don't really adhere to one, but I'm usually busy from 8AM to 5PM Monday to Friday, and outside of those hours I'm most available from 2:30AM onwards. (Yes, I'm a creature of the night- Don't worry about it.) 
            </ul>
        </div>
        <div :class="$style['panel']">
            <div :class="$style['panel-title']">Music Tastes</div>
            <ul :class="$style['panel-body']">
                <li><span :class="$style['item-name']">Pop</span> <span :class="$style['item-description']">Don't listen to what my Spotify says, my top artists are Billie Eilish and EDEN, along with anything you can find in the Pop Danthology mixes.</span></li>
                <li><span :class="$style['item-name']">EDM</span> <span :class="$style['item-description']">Start playing Varien, Marshmello, Alesso, Alan Walker.. you're gonna have me vibing <b>all</b> night.</span></li>
                <li><span :class="$style['item-name']">Dubstep</span> <span :class="$style['item-description']">Headhunterz, Knife Party, Krewella, and Tristam my loves. There'll always be a place in my heart for dubstep.</span></li>
                <li><span :class="$style['item-name']">Rap & Hip-hop</span> <span :class="$style['item-description']">Dr. Dre, Future, Tech N9ne, Juice WRLD, Nicki Minaj, Gunna. Ya gurl loves her rap and hip-hop artists.</span></li>
            </ul>

            I'll listen to almost anything, though. These are just my go-tos.
        </div>
        <div :class="$style['panel']">
            <div :class="$style['panel-title']">Top 5s...</div>
            <ul :class="$style['panel-body']">
                <li><span :class="$style['item-name']">Shows</span> <span :class="$style['item-description']">Digimon, Code Lyoko, RWBY, Bleach, Inuyasha</span></li>
                <li><span :class="$style['item-name']">Games</span> <span :class="$style['item-description']">Warframe, Dishonored, League of Legends (I'm not held hostage to say this, I promise), Minecraft, Baldur's Gate 3</span></li>
                <li><span :class="$style['item-name']">Songs</span> <span :class="$style['item-description']"><a href="https://www.youtube.com/watch?v=0pVABElms84" target="_blank">End Credits</a>, <a href="https://www.youtube.com/watch?v=Mq-yLC7wyKs" target="_blank">Knightmare/Frame</a>, <a href="https://www.youtube.com/watch?v=vFaPTCA6unE" target="_blank">Forever</a>, <a href="https://www.youtube.com/watch?v=hqkbPRWZHsg" target="_blank">Mirror Mirror Part II</a>, <a href="https://www.youtube.com/watch?v=97pmlfkF6BU" target="_blank">Phoenix Hearts</a></span></li>
                <li><span :class="$style['item-name']">Artists</span> <span :class="$style['item-description']"><a href="https://artistsnclients.com/people/Kmochi" target="_blank">Kmochi</a>, <a href="https://twitter.com/BurnRev" target="_blank">Kanel</a>, <a href="https://twitter.com/s_h_uuko" target="_blank">Shuuko</a>, <a href="https://x.com/shiru" target="_blank">Redjuice</a>, <a href="https://www.pixiv.net/en/users/529070" target="_blank">RJ/REALMBW</a></span></li>
                <li><span :class="$style['item-name']">Writers</span> <span :class="$style['item-description']">Edgar Allan Poe, Richelle Mead, Jodi Meadows, Christopher Pike, Timothy Hickson</span></li>
            </ul>
        </div>
    </div>
</template>

<style src="./about.css" module></style>
<script src="./about.js"></script>
