<template>
    <div class="header-wrapper">
        <lang-switcher></lang-switcher>
        <div class="logo-holder">
            <img svg-inline src="/src/assets/logo.svg" alt="Main MOZGI logo"/>
        </div>
        <router-link class="mobile-burger" to="/page">
            <img svg-inline src="/src/assets/burger.svg" alt="mobile menu"/>
        </router-link>
    </div>
</template>

<script>


import LangSwitcher from "@/components/ui_kit/LangSwitcher";

export default {
  name: "MainHeader",
    components: {LangSwitcher}
}
</script>

<style scoped lang="sass">
@import '../../sass/variables'

@media (orientation: portrait) and (orientation: landscape)
.header-wrapper
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    height: 70px
    width: 100%
    position: fixed
    top: 0
    left: 0
    .logo-holder
        margin-top: 24px
        svg
            width: 84px
            height: 46px
    .mobile-burger
        display: none

@media (orientation: portrait) and (max-width: 600px)
    .header-wrapper
        .mobile-burger
            @include column
            @include center
            width: 32px
            height: 32px
            position: absolute
            right: 24px
            top: 28px


</style>