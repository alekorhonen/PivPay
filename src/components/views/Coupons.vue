<template>
  <div class="coupons bootstrap-wrapper">
    <div class="wrapper panel">
      <table cellspacing="0" cellpadding="0">
        <thead>
          <tr class="tcat">
            <td width="20%">Code</td>
            <td width="20%">Discount</td>
            <td width="25%">License count</td>
            <td width="10%">Uses</td>
            <td width="10%" align="center"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123123tasd</td>
            <td>22%</td>
            <td>1</td>
            <td>454</td>
            <td align="center"><button class="primary-button">Options</button></td>
          </tr>
          <tr>
            <td>123123tasd</td>
            <td>22%</td>
            <td>1</td>
            <td>454</td>
            <td align="center"><button class="primary-button">Options</button></td>
          </tr>
          <!--
            <tr>
            <td colspan="6" align="center"><h4>You have no coupons yet.</h4></td>
          </tr>
          -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Coupons',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .panel table tr td.txid,
  .panel table tr td.address {
    max-width: 0;
    min-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .panel table tr.tcat td.order-date {
    min-width: 150px;
  }

  .panel table tr.tcat td.orderno {
    min-width: 50px;
  }
</style>
