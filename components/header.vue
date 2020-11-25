<template>
    <header class="application__header">
        <div>
            <label class="switch" for="dark-mode">
                <input id="dark-mode" type="checkbox" class="dark-mode-checkbox">
                <div class="switch__slider" />
            </label>
            <h1 class="h6">
                <nuxt-link to="/">
                    73
                </nuxt-link>
            </h1>
        </div>
        <nav>
            <ul>
                <li>
                    <nuxt-link class="link link--outline" to="/inkstarter" active-class="link--active" exact>
                        InkStarter
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link class="link link--outline" to="/" active-class="link--active" exact>
                        Lifestream
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link class="link link--outline" to="/music" active-class="link--active" exact>
                        Music
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link class="link link--outline" to="/web" active-class="link--active" exact>
                        Web
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link class="link link--outline" to="/newsletter" active-class="link--active" exact>
                        Newsletter
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
    export default {
        mounted() {
            this.$nextTick(() => {
                var checkbox = document.querySelector('.dark-mode-checkbox')

                checkbox.checked = localStorage.getItem('darkModeST12') === 'true'

                function bodyClass() {
                    if (checkbox.checked) {
                        document.getElementsByTagName( 'html' )[0].classList.add('dark-mode')
                    } else {
                        document.getElementsByTagName( 'html' )[0].classList.remove('dark-mode')
                    }
                }

                checkbox.addEventListener('change', function (event) {
                    localStorage.setItem('darkModeST12', event.currentTarget.checked)
                    bodyClass()
                })

                bodyClass()
            })
        }
    }
</script>
