<template>
  <div class="settings bootstrap-wrapper">
    <div class="wrapper">
      <div class="row">
        <div class="col-md-2">
          <div class="panel">
            <ul class="account-actions">
              <li class="title">Your account</li>
              <li><router-link to="/settings">General</router-link></li>
              <li><router-link to="/settings/payments">Payments</router-link></li>
              <li><router-link to="/settings/security">Security</router-link></li>
              <li><router-link to="/settings/notifications">Notifications</router-link></li>
            </ul>
          </div>
        </div>
        <div class="col-md-10">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {

    }
  }
}
</script>

<style>

ul.account-actions {
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
}

ul.account-actions li {
  display: block;
}

ul.account-actions li.title {
  font-size: .88rem;
  padding: 12px 8px;
  font-weight: 700;
}

ul.account-actions li a {
  display: block;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  border-left: 4px solid transparent;
  padding: 9px 10px;
}

ul.account-actions li a.router-link-exact-active {
  border-left: 4px solid #5c4d7d;
}
</style>
