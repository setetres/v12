<template>
    <div class="application__content application__content--inkstarter">
        <div class="application__content-title">
            <p>
                Project
            </p>
            <h1>
                InkStarter, a voting system tattoo challenge.
            </h1>
        </div>
        <div class="application__content-half">
            <img src="/images/inkstarter-winner-01.png">
        </div>
        <div class="application__content-half">
            <img src="/images/inkstarter-winner-02.png">
        </div>
        <div class="application__content-half">
            <img src="/images/inkstarter-winner-03.png">
        </div>
        <div class="application__content-half">
            <img src="/images/inkstarter-winner-04.png">
        </div>
        <div class="application__content-half">
            <img src="/images/inkstarter-winner-05.png">
        </div>
        <div class="application__content-half">
            <img src="/images/inkstarter-winner-06.png">
        </div>
        <div class="application__content-half">
            <img src="/images/inkstarter-winner-07.png">
        </div>
        <div class="application__content-half" />
        <div class="application__content-full">
            <ul>
                <li>
                    <a href="https://inkstarter.xxxxxxx.ooo" class="link" target="_blank" rel="noopener">
                        Visit website
                    </a>
                </li>
            </ul>
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
