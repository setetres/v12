<template>
    <div class="application__content application__content--newsletter">
        <div class="application__content-title">
            <p>
                Project
            </p>
            <h1>
                OXO, a weekly digest full of surprises. Friday 10AM BRST.
            </h1>
        </div>
        <div class="application__content-inverse">
            <div id="revue-embed" class="revue-embed">
                <form id="revue-form" class="revue-form" action="http://ooo.xxxxxxx.ooo/add_subscriber" method="post" name="revue-form" target="_blank">
                    <label for="member_email">Email address</label>
                    <input id="member_email" class="member_email" placeholder="Your email address" type="email" name="member[email]" required>
                    <input id="member_submit" class="member_submit" type="submit" value="Subscribe" name="member[subscribe]">
                </form>
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
