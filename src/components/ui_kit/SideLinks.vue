<template>
    <div class="link-wrapper">

        <router-link class='right' v-if="what" to="/page">
            <span>what?</span>
        </router-link>
        <router-link class="left" v-if="where" to="/page">
            <span>where?</span>
        </router-link>
        <router-link class="bottom" v-if="who" to="/page">
            <span>who?</span>
        </router-link>


    </div>
</template>

<script>
export default {
  name: "SideLinks",
    props:{
      what: Boolean,
      where: Boolean,
      who: Boolean
    }
}
</script>

<style scoped lang="sass">
.link-wrapper
    position: absolute
    a
        cursor: pointer
        text-decoration: none
        span
            color: #373737
            &::after
                content: ''
                position: absolute
                background-color: white
                transform: scaleX(0)
                transition: transform 300ms ease-out
                width: 100%
                height: 2px
                bottom: 0
                left: 0
                transform-origin: bottom left
        &:hover
            span
                color: white
                &::after
                    transform: scaleX(1)


</style>