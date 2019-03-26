<template>
    <div class="sidebar" v-bind:class="{ 'mobile-menu-active': mobileMenu }">
        <div class="logo">
            <img src="/static/logo_white.png" />
        </div>
        <div class="mobile-menu-anchor">
            <button class="mobile-menu-anchor hamburger hamburger--collapse" v-bind:class="{ 'is-active': mobileMenu }" type="button" @click="mobileMenu = !mobileMenu">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
        </div>
        <ul class="navigation">
            <li><router-link to="/"><span class="link-icon"><font-awesome-icon icon="columns" /></span>Overview</router-link></li>
            <li><router-link to="/transactions"><span class="link-icon"><font-awesome-icon icon="wallet" /></span>Transactions</router-link></li>
            <li><router-link to="/licenses"><span class="link-icon"><font-awesome-icon icon="id-card" /></span>Licenses</router-link></li>
            <li><router-link to="/coupons" :class="{'router-link-exact-active': subIsActive('/coupons')}"><span class="link-icon"><font-awesome-icon icon="tag" /></span>Coupons</router-link></li>
            <li><router-link to="/settings" :class="{'router-link-exact-active': subIsActive('/settings')}"><span class="link-icon"><font-awesome-icon icon="cog" /></span>Settings</router-link></li>
        </ul>
        <div class="bottom-links">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            mobileMenu: true
        }
    },
    methods: {
        subIsActive(input) {
            const paths = Array.isArray(input) ? input : [input]
            return paths.some(path => {
                return this.$route.path.indexOf(path) === 0 // current path starts with this path string
            })
        }
    }
}
</script>

<style scoped>
@import "../assets/css/hamburgers.css";

.sidebar {
    background: #372f45;
}

.sidebar .logo {
    display: block;
    text-align: center;
    height: 80px;
}

.sidebar .mobile-menu-anchor {
    position: relative;
    display: none;
    float: right;
    margin-top: 2px;
    cursor: pointer;
    color: white;
    outline: 0;
    opacity: 1 !important;
}

.hamburger-inner, 
.hamburger-inner::before, 
.hamburger-inner::after,
.hamburger.is-active .hamburger-inner, 
.hamburger.is-active .hamburger-inner::before, 
.hamburger.is-active .hamburger-inner::after {
    background-color: #FFFFFF;
    opacity: 1 !important;
}

.hamburger.is-active .hamburger-inner, 
.hamburger.is-active .hamburger-inner::before, 
.hamburger.is-active .hamburger-inner::after {
    background-color: #FFFFFF;
    opacity: 1;
}

.hamburger:hover {
    opacity: 1;
}

@media screen and (max-width: 1100px) {
  .sidebar .logo {
    display: inline-block;
    height: 100%;
  }

  .sidebar .mobile-menu-anchor {
    display: inline-block;
  }

}

.sidebar .logo img {
    height: 100%;
}

.sidebar ul.navigation {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.sidebar ul.navigation li {
    padding: 0;
    margin: 0;
}

.sidebar ul.navigation li a {
    display: block;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    color: #ccc;
    font-size: 14px;
    padding: 15px;
    text-decoration: none;
}

.sidebar ul.navigation li a span.link-icon {
    margin: 0 15px;
}

.sidebar ul.navigation li a.router-link-exact-active {
    color: white;
    background: #5c4d7d;
    border-color: rgba(255, 255, 255, 0.075);
}
</style>
