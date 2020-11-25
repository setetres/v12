<template>
    <div class="application">
        <Header />
        <nuxt />
        <Footer />
    </div>
</template>
<script>
    import Footer from '~/components/footer.vue'
    import Header from '~/components/header.vue'

    export default {
        components: {
            Footer,
            Header
        },

        mounted() {
        }
    }
</script>
