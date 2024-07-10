<template>
    <nav-bar></nav-bar>

    <router-view></router-view>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
    components: {
        NavBar,
    },
    methods: {
        pageCreated(page) {
            this.pages.push(page)
        }
    }
}
</script>