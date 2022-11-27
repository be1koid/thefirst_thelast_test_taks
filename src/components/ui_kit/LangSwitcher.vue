<template>
    <div class="lang-wrapper">
        <div class="tongue-slug">
            <img src="/tongue.png" alt="Language"/>
        </div>
        <div class="lang-options">
            <div class="lang">
                <p>UA</p>
            </div>
            <div class="lang">
                <p>EN</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "LangSwitcher"
}
</script>

<style scoped lang="sass">
@import '../../sass/variables'


.lang-wrapper
    width: 134px
    height: 38px
    position: absolute
    left: 24px
    top: 28px
    @include row
    justify-content: flex-start
    align-items: center
    overflow: hidden
    cursor: pointer
    .tongue-slug
        width: 38px
        height: 38px
        border-radius: 50%
        border: 1px solid #E5E5E5
        background-color: #BEBEBE
        z-index: 1
        @include column
        @include center
        img
            width: 16px
            height: 16px


    .lang-options
        @include row
        margin-left: -88px
        transition: margin-left 1s


        .lang
            width: 38px
            height: 38px
            margin: 0 4px
            border: 1px solid #E5E5E5
            border-radius: 50%
            opacity: 0
            @include column
            @include center
            &:nth-child(1)
                transition: opacity 400ms 200ms
            &:nth-child(2)
                transition: opacity 400ms 100ms
            p
                color: #373737
            &:hover
                border: 1px solid #FFCB46
                p
                    color: white

.lang-wrapper:hover
    .lang-options
        margin-left: 4px
        .lang
            opacity: 1








</style>