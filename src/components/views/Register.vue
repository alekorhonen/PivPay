<template>
    <div class="register">
        <form class="main-form" @submit.prevent="register">
            <div class="header">
                <img src="/static/logo_white.png" class="logo-img" />
            </div>
            <div class="content">
                <div v-if="request" class="preloader">
                    <Preloader v-if="request" :completed="success" />
                    <h4 ref="register_loader_text">Please wait a moment...</h4>
                </div>
                <div v-if="!request">
                    <div v-if="!showSeeds">
                        <div class="form-group" v-if="message">
                            <div class="message" v-if="!success" :class="{ 'message': message, 'failure': !success }">{{ message }}</div>
                        </div>
                        <div class="form-group">
                            <input type="username" class="form-control" placeholder="Display Name" v-model="username">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email" v-model="email">
                        </div>
                        <div class="form-group password-input">
                            <input type="password" class="form-control" placeholder="Password" v-model="password">
                        </div>
                        <div class="form-group password-input">
                            <input type="password" class="form-control" placeholder="Repeat password" v-model="repeatPassword">
                        </div>
                        <div class="form-group text-left">
                            <label><input type="checkbox" v-model="termsOfService" @change="agreedToTerms"> <span class="smalltext"> I agree to the Terms of Service and Privacy Policy.</span></label>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="primary-button btn-block">Register my account</button>
                        </div>
                        <router-link to="/login" class="smalltext">Already have an account? Sign in</router-link>
                    </div>
                    <div v-if="showSeeds" class="BackupPhrase">
                        <b>Backup Phrase</b>
                        <p class="smalltext">
                            Your backup phrase contains the private keys within your account. 
                            Please write these 12 words down, in order, and keep them somewhere safe offline.
                            This phrase gives you (or anyone who has it), the possibility to access and modify your account.
                        </p>
                        <div class="form-group">
                            <textarea class="form-control" v-model="seeds" placeholder="Wallet seed" readonly></textarea>
                        </div>
                        <div class="form-group">
                            <label><input type="checkbox" v-model="termsOfService" @change="agreedToTerms"> <span class="smalltext"> I have copied these seeds to a safe place.</span></label>
                        </div>
                        <center><a href="#" @click="showSeeds = !showSeeds">Go back</a></center>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import NodeRSA from 'node-rsa'
import aes256 from 'aes256'
import QuickEncrypt from 'quick-encrypt'
import randomWords from 'random-words'
import Preloader from '@/components/Preloader'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
    name: 'Register',
    data() {
        return {
            username: null,
            email: null,
            password: null,
            repeatPassword: null,
            request: true,
            success: false,
            message: null,
            showSeeds: false,
            seeds: '',
            backupKey: null,
            termsOfService: false
        }
    },
    components: {
        Preloader
    },
    mounted() {
        if(!this.$store.state.publicKey || !this.$store.state.privateKey) {
            const that = this
            setTimeout(() => {
                that.generateKeyPairs().then((keys) => {
                    this.$store.state.publicKey = this.publicKey 
                    this.$store.state.privateKey = this.privateKey
                }).finally(() => {
                    this.request = false
                    this.seeds = randomWords({ exactly: 12, formatter: (word)=> word.toUpperCase(), join: ' '})
                    this.$store.state.backupKey = btoa(aes256.encrypt(this.seeds, btoa(this.privateKey)))
                })
            }, 1500)
        } else {
            this.request = false
        }
    },
    methods: {
        agreedToTerms() {
            if(this.termsOfService)
                this.$refs.submitRegistration.disabled = false
            else
                this.$refs.submitRegistration.disabled = true
        },
        continueRegistration() {
            this.showSeeds = true
        },
        generateKeyPairs: () => {
            return new Promise((resolve) => {
                resolve(QuickEncrypt.generate(2048))
            });
            //console.log(this.publicKey, this.privateKey)
            /* const encrypted = btoa(aes256.encrypt(passphrase, keys.private));

            localStorage.setItem(username + '_privateKey', encrypted)
            localStorage.setItem(username + '_publicKey', btoa(keys.public)) */
        },
        createBackupKey: () => {
            this.seeds = randomWords({ exactly: 12, formatter: (word)=> word.toUpperCase(), join: ' '})
            console.log(this.seeds)
            this.backupKey = btoa(aes256.encrypt(this.seeds, btoa(this.privateKey)))
        },
        passwordStrength: (password) => {
            let str = 0

            if(password.length > 8)
                str++
            if(password.match(/[a-z]/))
                str++
            if(password.match(/[A-Z]/))
                str++
            if(password.match(/[0-9]/))
                str++

            let containsSpecials = false
            var splChars = "*|,\":<>[]{}`\';()@&$#%";
            for (var i = 0; i < password.length; i++) {
                if (splChars.indexOf(password.charAt(i)) != -1) {
                    containsSpecials = true;
                }
            }

            if(containsSpecials)
                str++;

            return str;
        },
        register() {
            if(!this.username || !this.email) {
                this.message = "Please fill all fields"
                return
            }

            if(this.password != this.repeatPassword) {
                this.message = "Password's do not match."
                return
            }

            this.request = true; //Show our preloader
            const self = this
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred => {
                const user = firebase.auth().currentUser

                //Update the username/display name seperately to the user's account.
                user.updateProfile({
                    displayName: this.username
                }).then(function() {
                    self.showSeeds = true
                    self.request = false
                }).catch(function(error) {
                    console.log(error)
                    self.showSeeds = true
                    self.request = false
                });
                    
            }).catch(err => {
                console.log(err)
                this.message = err.message
                this.request = false
            })
        },
        finalizeRegistration: () => {
            this.$refs.register_loader_text.innerHTML = "Generating your encryption keys...";
            generateKeyPairs()
            .then(() => {
                this.$refs.register_loader_text.innerHTML = "Finalizing registration...";
                
            })
        }
    },
    computed: {
        requesting: function() {
            if(this.success)
                return false;
            else if(this.request)
                return true;

            return false;
        }
    },
    watch: {
        password: function(val) {
            //console.log('strength:', this.passwordStrength(val))
        }
    }
}
</script>

<style scoped>
.register {
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

.register .main-form {
    background: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
    text-align: center;
    width: 380px;
    max-width: 450px;
    min-width: 300px;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
}

.register .main-form .content {
    padding: 30px;
}

.register .main-form .header {
    background: #025693;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 75px;
}

.BackupPhrase {
    text-align: left;
}

@media screen and (max-width: 414px) {
    .register {
        background: #FFFFFF;
        justify-content: top;
        align-items: flex-start;
    }

    .register .main-form {
        width: 100%;
        box-shadow: none;
    }

    .register .main-form .header {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
}

.register .main-form .logo-img {
    height: 50px;
    margin-top: 13px;
}

.register .main-form .primary-button.success {
    background: #12AF23;
}

button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
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

textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
}
</style>
