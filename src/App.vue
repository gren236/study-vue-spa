<template>
    <nav-bar></nav-bar>

    <router-view></router-view>

<!--    <page-viewer-->
<!--        v-if="pages.length > 0"-->
<!--        :page="pages[activePage]"-->
<!--    ></page-viewer>-->

<!--    <create-page-->
<!--        @page-created="pageCreated"-->
<!--    ></create-page>-->
</template>

<script>
import NavBar from "@/components/NavBar.vue";
// import PageViewer from "@/components/PageViewer.vue";
// import CreatePage from "@/components/CreatePage.vue";

export default {
    components: {
        NavBar,
        // PageViewer,
        // CreatePage
    },
    methods: {
        pageCreated(page) {
            this.pages.push(page)
        }
    }
}
</script>