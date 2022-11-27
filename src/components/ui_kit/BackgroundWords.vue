<template>
    <h2>
        <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
    </h2>
</template>

<script>
export default {
    name: "BackgroundWords"
}
</script>

<style scoped lang="sass">
@import '../../sass/variables'
@keyframes animate-text
    0%
        transform: translateX(-100%)
    100%
        transform: translateX(-5%)

h2
    width: 100%
    z-index: -1
    @include row
    span
        width: 100%
        font-style: italic
        font-weight: 700
        font-size: 52px
        line-height: 110%
        text-shadow: -1px 0 #373737, 0 1px #373737, 1px 0 #373737, 0 -1px #373737
        opacity: 0.1
        color: #BEBEBE
        white-space: nowrap
        text-transform: uppercase
        position: absolute
        top: 0
        left: 0
        transform: translateX(-5%)
        animation: animate-text 10s linear infinite forwards
        transition: 10s !important

@media (orientation: portrait) and (max-width: 600px)
    h2
        span
            font-size: 28px



</style>