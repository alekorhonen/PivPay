<template>
    <div class="login">
        <form class="main-form" @submit.prevent="login">
            <div class="header">
                <img src="/static/logo_white.png" class="logo-img" />
            </div>
            <div class="content">
                <div v-if="request" class="preloader">
                    <Preloader v-if="request" :completed="success" />
                    <h4 ref="PreloaderText">Please wait a moment...</h4>
                </div>
                <div v-if="!request">
                    <div class="form-group" v-if="message">
                        <div class="message" v-if="!success" :class="{ 'message': message, 'failure': !success }">{{ message }}</div>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="E-mail Address" v-model="email">
                    </div>
                    <div class="form-group password-input">
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                        <a href="#" class="smalltext">Forgot password?</a>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="primary-button btn-block" :class="{ 'success': success }">
                            <span v-if="successful">Sign In</span>
                            <span v-if="requesting"><font-awesome-icon icon="spinner" spin /></span>
                            <span v-if="success"><font-awesome-icon icon="check" />&nbsp; Signed in successfully</span>
                        </button>
                    </div>
                    <router-link to="/register" class="smalltext">Don't have an account? Register now</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Preloader from '../Preloader'
import firebase from 'firebase'

export default {
    name: 'Login',
    components: {
        Preloader
    },
    data() {
        return {
            email: null,
            password: null,
            request: false,
            success: false,
            message: null
        }
    },
    methods: {
        login() {
            this.request = true;

            if(this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(cred => {
                    this.request = false
                    this.$store.state.loggedIn = true
                    this.$router.push({ path: '/' })
                }).catch(err => {
                    this.message = err.message
                    this.request = false
                })
            }
        }
    },
    computed: {
        requesting: function() {
            if(this.success)
                return false
            else if(this.request)
                return true

            return false
        },
        successful: function() {
            if(this.success)
                return false
            else if(this.request)
                return false;
            else
                return true
        }
    }
}
</script>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    background: #F0F4F9;
    align-items: center;
    display: flex;
    justify-content: center;
}

.preloader h3 {
    margin-top: 20px;
}


a {
    color: rgb(83, 144, 255);
}

a:hover {
    color: #372f45;
}

.login .main-form {
    background: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
    text-align: center;
    width: 380px;
    max-width: 450px;
    min-width: 300px;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
}

.login .main-form .content {
    padding: 30px;
}

.login .main-form .header {
    background: #025693;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 75px;
}

@media screen and (max-width: 414px) {
    .login {
        background: #FFFFFF;
        justify-content: top;
        align-items: flex-start;
    }

    .login .main-form {
        width: 100%;
        box-shadow: none;
    }

    .login .main-form .header {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
}

.login .main-form .logo-img {
    height: 50px;
    margin-top: 13px;
}

.login .main-form .primary-button.success {
    background: #12AF23;
}

.password-input {
    text-align: right;
}

.message {
  display: block;
  text-align: left;
  border: 1px solid rgba(0, 0, 0, 0.175);
  padding: 12px 15px;
  font-weight: 600;
  font-size: 14px;
  color: white;
  border-radius: 3px;
}

.message.failure {
    background: #af1212;
}

.message.success {
    background: #12AF23;
}

h3 {
    margin-top: 0;
}
</style>
