<template>
    <a target="_blank" href="/" class="text-container">
        <img svg-inline src="/src/assets/showreel.svg" alt="showreel link"/>
        <div class="dot"></div>
    </a>
</template>

<script>
export default {
  name: "ShowreelLink"
}
</script>

<style scoped lang="sass">
@import '../../sass/variables'
@keyframes spin
    0%
        transform: rotate(360deg)
    100%
        transform: rotate(0deg)

a
    width: 115rem
    height: 115rem
    position: relative
    @include column
    @include center
    animation: spin 4s linear 0s infinite normal
    -moz-animation: 4s linear 0s normal none infinite spin
    -webkit-animation: spin 4s linear 0s infinite normal
    animation-play-state: paused

    svg
        width: 100%
        height: 100%
        position: absolute
        top: 0
        left: 0

    .dot
        width: 8px
        height: 8px
        border-radius: 50%
        background-color: black
    &:hover
        animation-play-state: running






</style>