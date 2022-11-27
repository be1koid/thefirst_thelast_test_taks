<template>
    <main>
        <main-header></main-header>
        <background-words></background-words>
        <background-words class="upside_down"></background-words>
        <div class="circle"></div>
        <h1>FULL-CYCLE EVENT AGENCY</h1>
        <side-links class="bottom" who></side-links>
        <side-links class="right" what></side-links>
        <side-links class="left" where></side-links>
        <showreel-link></showreel-link>

    </main>
</template>

<script>
import MainHeader from "@/components/ui_kit/MainHeader";
import SideLinks from "@/components/ui_kit/SideLinks";
import BackgroundWords from "@/components/ui_kit/BackgroundWords";
import ShowreelLink from "@/components/ui_kit/ShowreelLink";
export default {
  name: 'LandingPage',
    components: {ShowreelLink, BackgroundWords, SideLinks, MainHeader},
}
</script>


<style scoped lang="sass">
@import '../sass/variables'
main
    width: 100vw
    height: 100vh
    overflow: hidden
    background-color: transparent
    position: relative
    @include column
    @include center
    h1
        text-transform: capitalize
        text-align: center
        z-index: 2
        color: #373737
        position: absolute
    .circle
        -webkit-filter: blur(38px)
        -ms-filter: blur(38px)
        filter: blur(38px)
        background-color: #FFCB46
        border-radius: 50%
        position: absolute
        z-index: -1
    .right
        transform: rotate(90deg)
    .left
        transform: rotate(270deg)



@media (orientation: landscape)
    main
        h1
            width: 1023rem
            //margin: -70rem 0 0 0
        .circle
            width: 578rem
            height: 578rem
            top: calc(50% - 289rem)
            left: calc(50% - 289rem)
        .bottom
            bottom: 19rem
        .right
            right: -19px
            top: calc(50% - 34px)

        .left
            left: -24px
            top: calc(50% - 34px)

        h2
            transform: rotate(-30deg)
        h2:nth-child(2)
            transform: rotate(150deg)
            margin-bottom: 0
        .text-container
            right: -180rem
            bottom: -200rem

@media (orientation: portrait)
    main
        h1
            width: 1072rem


        .circle
            width: 800rem
            height: 800rem
            top: calc(50% - 400rem)
            left: calc(50% - 400rem)
        .bottom
            bottom: 12rem
        .right
            right: -12rem
            top: calc(50% - 34px)

        .left
            left: -10rem
            top: calc(50% - 34px)

        h2
            transform: rotate(125deg)
            margin-bottom: -100px
        h2:nth-child(2)
            transform: rotate(-55deg)
            margin-bottom: 0
        .text-container
            width:  115px
            height: 115px
            bottom: -400rem
            right: -228rem

@media (orientation: portrait) and (max-width: 600px)
    main
        .link-wrapper
            display: none
        h1
            width: calc(100vw - 32px)
        .circle
            width: 294px
            height: 294px
            top: unset
            left: unset
        .text-container
            width:  87px
            height: 87px
            bottom: -156px
            right: -77px



</style>
