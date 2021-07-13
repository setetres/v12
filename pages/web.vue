<template>
    <div class="application__content application__content--web">
        <div class="application__content-title">
            <p>
                Project
            </p>
            <h1>
                Sete Três, a never ending work in progress website catalog.
            </h1>
        </div>
        <div class="application__content-half">
            <div class="web web--v11">
                <a href="https://v11.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
        <div class="application__content-half">
            <div class="web web--v10">
                <a href="https://v10.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
        <div class="application__content-half">
            <div class="web web--v9">
                <a href="https://v9.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
        <div class="application__content-half">
            <div class="web web--v8">
                <a href="https://v8.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
        <div class="application__content-half">
            <div class="web web--v7">
                <a href="https://v7.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
        <div class="application__content-half">
            <div class="web web--v6">
                <a href="https://v6.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
        <div class="application__content-half">
            <div class="web web--v5">
                <a href="https://v5.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
        <div class="application__content-half">
            <div class="web web--v4">
                <a href="https://v4.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
        <div class="application__content-half">
            <div class="web web--v3">
                <a href="https://v3.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
        <div class="application__content-half">
            <div class="web web--v2">
                <a href="https://v2.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
        <div class="application__content-half">
            <div class="web web--v1997">
                <a href="https://1997.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
        <div class="application__content-half">
            <div class="web web--v1">
                <a href="https://v1.setetres.st" target="_blank" rel="noopener" class="h1" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        beforeRouteLeave(to, from, next) {
            this.$nextTick(() => {
                next()
            })
        },

        head() {
            return {
                title: 'Sete Três — v12'
            }
        },

        mounted() {
            this.$nextTick(() => {
            })
        }
    }
</script>
