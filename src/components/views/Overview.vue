<template>
  <div class="overview bootstrap-wrapper">
      <div class="wrapper">
        <div class="statistics row">
          <div class="col-md-3">
            <div class="panel">
              <div class="title">
                <span>Revenue</span>
              </div>
              <div class="value primary-color">
                <div class="amount">0</div>
                <div class="sign">$</div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="panel">
              <div class="title">
                <span>Transactions</span>
              </div>
              <div class="value primary-color">
                <span>0</span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="panel">
              <div class="title">
                <span>Active licenses</span>
              </div>
              <div class="value primary-color">
                <span>0</span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="panel">
              <div class="title">
                <span>Conversion rate</span>
              </div>
              <div class="value primary-color">
                <div class="amount">0</div>
                <div class="sign">%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="revenue-chart">
          <div class="panel">
            <div class="panel-heading">
              Revenue
            </div>
            <div class="panel-body">
              <line-chart :colors="['rgb(83, 144, 255)']" :data="data" width="100%" height="300px"></line-chart>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  data () {
    return {
      data: {
        '2019-03-8': 2,
        '2019-03-9': 5,
        '2019-03-10': 20,
        '2019-03-11': 16,
        '2019-03-12': 25,
        '2019-03-13': 34,
        '2019-03-14': 63,
        '2019-03-15': 45,
        '2019-03-16': 55,
        '2019-03-17': 85,
        '2019-03-19': 98,
        '2019-03-20': 77,
        '2019-03-21': 65,
        '2019-03-22': 100,
      }
    }
  }
}
</script>

<style>
  .row {
    padding-bottom: 30px;
  }

  .statistics .panel {
    padding: 30px 30px 30px;
  }

  @media screen and (max-width: 824px) {
    .statistics .panel {
      margin-bottom: 10px;
    }

    .statistics .col-md-3 {
      display: block;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  .statistics .panel .title {
    font-size: 15px;
    color: #aeb5bc;
  }

  .statistics .panel .value {
    position: relative;
    font-size: 35px;
    color: #4a586a;
  }

  .statistics .panel .value .amount,
  .statistics .panel .value .sign {
    display: inline-block;
  }

  .statistics .panel .value .sign {
    font-size: 20px;
  }
</style>
