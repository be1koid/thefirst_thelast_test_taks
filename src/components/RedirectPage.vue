<template>
    <div>
        <div>redirected</div>
        <router-link to="/">back</router-link>
    </div>

</template>

<script>
export default {
  name: "RedirectPage"
}
</script>

<style scoped lang="sass">
@import '../sass/variables'
div
    width: 100vw
    height: 100vh
    @include column
    @include center


</style>