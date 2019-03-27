<template>
    <div class="sidebar" v-bind:class="{ 'mobile-menu-active': mobileMenu }">
        <div class="header">
            <div class="wrapper">
                <div class="logo">
                    <img src="/static/logo_white.png" class="logo-img" />
                </div>
                <div class="account-anchor-parent noselect" :class="{ 'open': userMenu }" @click="userMenu = !userMenu">
                    <div class="account-anchor">
                        <span class="user-icon"></span>
                        My Account&nbsp;<span class="icon"><font-awesome-icon icon="user-alt" /></span>
                        <div class="dropdown-menu">
                            <div class="user-block">
                                <avatar :username="accountName" :size="45" :customStyle="{ 'margin': '0 auto', 'display': 'inline-block', 'vertical-align': 'middle' }"></avatar>
                                <div class="user-details">
                                    <b>{{ accountName }}</b><br />
                                    <span>Customer</span>
                                </div>
                            </div>
                            <ul>
                                <li><a href="#" @click="logout"><font-awesome-icon icon="sign-out-alt" class="link-icon" /> Sign out</a></li>
                            </ul>
                        </div>
                    </div>
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
import firebase from 'firebase'
import Avatar from 'vue-avatar'

export default {
    name: 'Sidebar',
    data() {
        return {
            mobileMenu: false,
            userMenu: false
        }
    },
    components: {
        'avatar': Avatar
    },
    methods: {
        subIsActive(input) {
            const paths = Array.isArray(input) ? input : [input]
            return paths.some(path => {
                return this.$route.path.indexOf(path) === 0 // current path starts with this path string
            })
        },
        logout() {
            const self = this
            firebase.auth().signOut().then(function() {
                self.$store.state.currentUser = null
                self.$router.push({ path: '/login' })
            }).catch(function(error) {
                console.log(error.message)
            });
        }
    },
    computed: {
        accountName() {
            return firebase.auth().currentUser.displayName
        },
        accountPhoto() {
            return firebase.auth().currentUser.photoURL
        }
    },
    mounted() {
        
    }
}
</script>

<style scoped>
@import "../assets/css/hamburgers.css";

.sidebar {
    background: #025693;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
}

.sidebar .header {
    display: block;
    height: 70px;
}

.account-anchor-parent {
    display: inline-block;
    position: relative;
    float: right;

    -webkit-transition: all 0.15s linear;
    -moz-transition: all 0.15s linear;
    -ms-transition: all 0.15s linear;
    -o-transition: all 0.15s linear;
    transition: all 0.15s linear;
}

.sidebar .header .account-anchor {
    height: 70px;
    line-height: 70px;
    padding: 0 15px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    float: right;
}

.sidebar .header .account-anchor-parent.open {
    background: rgba(0, 0, 0, 0.1);
}

.sidebar .header .account-anchor .dropdown-menu { 
    position: absolute;
    list-style-type: none;
    top: 100%;
    top: calc(100% + 10px);
    right: 0; /* move content -4px because of container left border */
    width: 230px;
    z-index: 1;
    display: none;
    background: #FFFFFF;
    border: 1px solid #ccc;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    cursor: default;
}

.sidebar .header .account-anchor .dropdown-menu:after,
.sidebar .header .account-anchor .dropdown-menu:before {
	bottom: 100%;
	right: 10px;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.sidebar .header .account-anchor .dropdown-menu:after {
	border-color: rgba(136, 183, 213, 0);
	border-bottom-color: white;
	border-width: 9px;
	margin-right: 10px;
}

.sidebar .header .account-anchor .dropdown-menu:before {
	border-color: rgba(136, 183, 213, 0);
	border-bottom-color: #cccccc;
	border-width: 10px;
    margin-right: 9px;
}

.sidebar .header .account-anchor-parent.open .dropdown-menu {
    display: block;
}

.sidebar .header .account-anchor .dropdown-menu ul {
    margin: 0;
    padding: 5px 0;
    list-style-type: none;
}

.sidebar .header .account-anchor .dropdown-menu li { 
    margin: 0;
    padding: 0;
}

.sidebar .header .account-anchor .dropdown-menu .user-block {
    height: 75px;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid #e9ecef;
}

.sidebar .header .account-anchor .dropdown-menu .user-block .user-details {
    display: inline-block;
    float: right;
    text-align: left;
    height: 75px;
    line-height: 20px;
    max-width: 65%;
    min-width: 65%;
    margin-left: 5px;
    margin-right: 10px;
    padding-top: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.sidebar .header .account-anchor .dropdown-menu .user-block .user-details b {
    color: rgba(0, 0, 0, 0.8);
}
.sidebar .header .account-anchor .dropdown-menu .user-block .user-details span {
    color: rgba(0, 0, 0, 0.4);
    font-weight: 400;
}
.sidebar .header .account-anchor .dropdown-menu li a { 
    display: block;
    color: rgba(0, 0, 0, 0.6);
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    text-decoration: none;
}

.sidebar .header .account-anchor .dropdown-menu li a .link-icon { 
    margin-right: 8px;
}

.sidebar .header .account-anchor .dropdown-menu li a:hover {
    background: #025693;
    color: white;
}

.sidebar .header .account-anchor .dropdown-menu li.dropdown-divider {
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef;
}

.sidebar .header .account-anchor .icon {
    margin-left: 10px;
}

.sidebar .header .account-anchor .user-icon {
    margin-right: 10px;
}

.sidebar .header .account-anchor .default-profile-photo {
    vertical-align: middle;
    width: 36px;
    height: 36px;
    margin-right: 10px;
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
