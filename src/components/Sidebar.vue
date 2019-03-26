<template>
    <div class="sidebar" v-bind:class="{ 'mobile-menu-active': mobileMenu }">
        <div class="header">
            <div class="wrapper">
                <div class="logo">
                    <img src="/static/logo_white.png" class="logo-img" />
                </div>
                <div class="account-anchor">
                    <span class="header-seperator"></span>
                    <a href="#" class="account-anchor-link">
                        <img src="/static/avatar1.png" class="account-image" />
                        {{ accountName }}&nbsp;<span class="icon"><font-awesome-icon icon="chevron-down" /></span></a>
                </div>
            </div>
        </div>
        <div class="mobile-menu-anchor">
            <button class="mobile-menu-anchor hamburger hamburger--collapse" v-bind:class="{ 'is-active': mobileMenu }" type="button" @click="mobileMenu = !mobileMenu">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
        </div>
        <div class="section-header">
            <div class="wrapper">
                <ul class="navigation">
                    <li><router-link to="/"><span class="link-icon"><font-awesome-icon icon="columns" /></span>Overview</router-link></li>
                    <li><router-link to="/transactions"><span class="link-icon"><font-awesome-icon icon="wallet" /></span>Transactions</router-link></li>
                    <li><router-link to="/coupons" :class="{'router-link-exact-active': subIsActive('/coupons')}"><span class="link-icon"><font-awesome-icon icon="tags" /></span>Coupons</router-link></li>
                    <li><router-link to="/settings" :class="{'router-link-exact-active': subIsActive('/settings')}"><span class="link-icon"><font-awesome-icon icon="cog" /></span>Settings</router-link></li>
                </ul>
            </div>
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
    },
    computed: {
        accountName() {
            return this.$store.state.Username
        }
    }
}
</script>

<style scoped>
@import "../assets/css/hamburgers.css";

.sidebar {
    background: #025693;
    overflow: hidden;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
}

.sidebar .header {
    display: block;
    height: 70px;
    overflow: hidden;
}

.sidebar .header .account-anchor {
    display: inline-block;
    float: right;
}

.sidebar .header .account-anchor .account-anchor-link {
    display: block;
    height: 70px;
    line-height: 70px;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
}

.sidebar .header .account-anchor .account-anchor-link .icon {
    margin-left: 10px;
}

.sidebar .header .account-anchor .account-anchor-link .account-image {
    vertical-align: middle;
    width: 36px;
    height: 36px;
    margin: 0 10px;
    border-radius: 25px;
    border: 3px solid rgba(0, 0, 0, 0.2);
}

.sidebar .mobile-menu-anchor {
    position: relative;
    display: none;
    float: right;
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
    background-color: #777;
    opacity: 1 !important;
}

.hamburger.is-active .hamburger-inner, 
.hamburger.is-active .hamburger-inner::before, 
.hamburger.is-active .hamburger-inner::after {
    background-color: #777;
    opacity: 1;
}

.hamburger:hover {
    opacity: 1;
}

@media screen and (max-width: 1100px) {
  .sidebar .mobile-menu-anchor {
    display: inline-block;
  }

}

.sidebar .header .logo {
    display: inline-block;
    height: 70px;
}

.sidebar .header .logo-img {
    height: 50px;
    margin-top: 10px;
}

.sidebar ul.navigation {
    display: inline-block;
    vertical-align:top;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.sidebar ul.navigation li {
    display: inline-block;
    padding: 0;
    margin: 0;
}

.sidebar ul.navigation li a {
    display: block;
    height: 55px;
    color: rgba(0, 0, 0, .5);
    font-weight: bold;
    font-size: 13px;
    padding: 0 10px;
    padding-right: 25px;
    text-decoration: none;
}

.sidebar ul.navigation li a span.link-icon {
    margin: 0 15px;
}

.sidebar ul.navigation li a.router-link-exact-active {
    color: rgb(83, 144, 255);
}
</style>
