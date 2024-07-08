<template>
    <nav class="navbar navbar-expand-lg"
         :class="[`navbar-${theme}`, `bg-${theme}`]">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavBarLink
                        v-for="(page, index) in publishedPages" class="nav-item" :key="index"
                        :page="page"
                        :index="index"
                    ></NavBarLink>

                    <li>
                        <router-link
                            to="/create"
                            class="nav-link"
                            aria-current="page"
                            active-class="active"
                        >
                            Create Page
                        </router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle Navbar</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
import NavBarLink from "@/components/NavBarLink.vue";

export default {
    components: {
        NavBarLink
    },
    created() {
        this.getThemeSetting()

        this.pages = this.$pages.getAllPages()
    },
    computed: {
        publishedPages() {
            return this.pages.filter(p => p.published)
        }
    },
    data() {
        return {
            theme: 'dark',
            pages: []
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light'

            if (this.theme === 'light') {
                theme = 'dark'
            }

            this.theme = theme
            this.storeThemeSetting()
        },
        storeThemeSetting() {
            localStorage.setItem('theme', this.theme)
        },
        getThemeSetting() {
            let theme = localStorage.getItem('theme')

            if (theme) {
                this.theme = theme
            }
        }
    }
}
</script>