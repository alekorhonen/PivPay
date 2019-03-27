<template>
  <div id="app">
    <Sidebar v-if="!request && user" />
    <transition
      name="fade"
      mode="out-in">
      <router-view></router-view>
    </transition>
    <div v-if="request" style="height: 100%; align-items: center; display: flex; justify-content: center;">
      <Preloader />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Preloader from '@/components/Preloader'
import firebase from 'firebase'

export default {
  name: 'App',
  components: {
    Sidebar,
    Preloader
  },
  data() {
    return {
      request: true,
      user: null
    }
  }, 
  mounted() {
    const self = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.user = user
      } else {
        self.user = null
      }

      self.request = false
    })
  }
}
</script>

<style>
@import "assets/css/bootstrap-grid.min.css";

html, body {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

*, :after, :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

h1, h2, h3, h4, h5, h6 {
  font-family: inherit;
  font-weight: 400;
  color: inherit;
  line-height: 1.1;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

label {
  font-size: .9rem;
}

a {
  color: #5C4D7D;
  text-decoration: none;
  -o-transition:.2s;
  -ms-transition:.2s;
  -moz-transition:.2s;
  -webkit-transition:.2s;
  transition:.2s;
}

a:hover {
  color: #91648E;
  text-decoration: none;
}

.center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.smalltext {
  font-size: 13px;
}

.primary-color {
  color: rgb(83, 144, 255) !important;
}

#app {
  width: 100%;
  height: 100vh;
  background: #F0F4F9;
  color: #59595a;
  overflow: hidden;
}

#app .content {
  /* display: inline-block; */
  overflow-x: auto;
  /* float: left; */
}

/*
#app .sidebar {
  width: 250px;
}

#app .content {
  width: calc(100% - 250px);
}
*/

.wrapper {
  width: 95%;
  max-width: 1300px;
  margin: 0 auto;
}

.panel {
  background: #FFFFFF;
  border: 1px solid #e7edee;
}

.panel .panel-heading {
  font-size: 1rem;
  padding: 15px;
  border-bottom: 1px solid #eeeff8;
}

.panel .panel-body {
  padding: 20px;
}

@media screen and (max-width: 1100px) {
  #app .sidebar {
    display: block;
    overflow-y: hidden;
    width: 100%;
    height: 60px;
  }

  #app .sidebar.mobile-menu-active .logo {
    height: 50px;
  }

  #app .sidebar.mobile-menu-active {
    height: auto;
  }

  #app .content {
    display: block;
    width: 100%;
    height: 100%;
    padding-bottom: 100px;
  }

}

.section-header {
  background: #FFFFFF;
  color: #777;
  height: 55px;
  line-height: 55px;
}

.section-header h3 {
  display: inline-block;
  margin: 0;
  margin-left: 20px;
}

.button-right {
  display: inline-block;
  margin-top: 20px;
  vertical-align: middle;
  float: right;
}

.panel {
  overflow-x:auto;
}

.panel table {
  width: 100%;
}

.panel table tr td {
  font-size: 14px;
  padding: 10px 15px;
}

.panel table tr.tcat td {
  font-weight: 600;
  border-bottom: 1px solid #eeeff8;
}

a.primary-button,
.primary-button {
  display: block;
  background: #025693;
  color: #fff;
  border: 0;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  box-shadow: rgba(0,0,0,0.1) 1px 0px 0px 0px;
  text-shadow: rgba(0,0,0,0.2) 0px 1px 0px;
  padding: 0 1.3rem;
  font-weight: 600;
  font-size: .9rem;
  height: 2.5rem;
  line-height: 2.5rem;
  cursor: pointer;
  -o-transition:.2s;
  -ms-transition:.2s;
  -moz-transition:.2s;
  -webkit-transition:.2s;
  transition:.2s;
}

.primary-button:hover {
  background: #0166af;
}

.primary-button.btn-block {
  display: block;
  width: 100%;
}

.form-group {
    margin-bottom: 20px;
}

.form-control {
  width: 100%;
  height: 48px;
  padding: 6px 12px;
  background-color: #fff;
  border: 1px solid #e4eaec;
  border-radius: 2px;
  -webkit-transition: border .1s linear,color .1s linear,background-color .25s linear;
  transition: border .1s linear,color .1s linear,background-color .25s linear;
  font-weight: 400;
  font-size: 13px;
  -webkit-box-shadow: none;
  box-shadow: none;
}

textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {   
    border-color: rgba(77, 170, 210, 0.8);
    outline: 0 none;
}

.alert {
  display: block;
  height: 75px;
  line-height: 1.1;
  background: #FFFFFF;
  margin-bottom: 15px;
  border-left: 4px solid transparent;
  border-radius: 3px;
}

.alert .alert-icon {
  display: inline-block;
  height: 75px;
  line-height: 75px;
  margin: 0 15px;
  font-size: 26px;
}

.alert .alert-content {
  display: inline-block;
  vertical-align: top;
  padding-top: 17px;
}

.alert .alert-content p {
  color: #989A9D;
  margin-top: 8px;
  margin-bottom: 0;
}

.alert.alert-success {
  border-color: #12AF23;
}

.alert.alert-failure {
  border-color: #af1212;
}

.alert.alert-success .alert-icon {
  color: #12AF23;
}

.alert.alert-failure .alert-icon {
  color: #af1212;
}

.badge {
  padding: 5px 7px;
  border-radius: 4px;
  font-weight: 400;
}

.badge.active {
  background: #12AF23;
  color: white;
}

.badge.warning {
  background: #FF8907;
  color: white;
}

.badge.inactive {
  background: #af1212;
  color: white;
}
</style>
