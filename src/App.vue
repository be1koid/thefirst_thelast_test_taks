<template>
    <transition name="appear" mode="out-in">
        <router-view/>
    </transition>

</template>

<script>



export default {
  name: 'App',
  components: {


  }
}
</script>

<style lang="sass">
@import "sass/app.sass"
@font-face
    font-family: 'Grtsk Giga'
    font-face-name: "Grtsk Giga Bold"
    //src: url("../fonts/GrtskGiga-Bold.woff2")
    src: url('./fonts/GrtskGiga-Bold.woff2') format('woff2'), url('./fonts/GrtskGiga-Bold.woff') format('woff'), url('./fonts/GrtskGiga-Bold.ttf') format('truetype')
    font-weight: 700
    font-style: normal

@font-face
    font-family: 'Grtsk Giga'
    font-face-name: "Grtsk Giga BoldItalic"
    src: url('./fonts/GrtskGiga-BoldItalic.woff2') format('woff2'), url('./fonts/GrtskGiga-BoldItalic.woff') format('woff'), url('./fonts/GrtskGiga-BoldItalic.ttf') format('truetype')
    font-weight: 700
    font-style: italic



@font-face
    font-family: 'Grtsk Giga'
    font-face-name: "Grtsk Giga Semibold"
    src: url('./fonts/GrtskGiga-Semibold.woff2') format('woff2'), url('./fonts/GrtskGiga-Semibold.woff') format('woff'), url('./fonts/GrtskGiga-Semibold.ttf') format('truetype')
    font-weight: 600
    font-style: normal
    font-size: 16px

.appear-enter-active, .appear-leave-active
    transition: opacity 1s, transform 1s
.appear-enter, .appear-leave-to
    opacity: 0
    transform: translatex(50%)
</style>
