<template>
  <div class="wrapper coupons bootstrap-wrapper">
    <div class="panel">
      <table cellspacing="0" cellpadding="0">
        <thead>
          <tr class="tcat">
            <td width="3%" align="center" class="orderno">#</td>
            <td width="15%">Order ID</td>
            <td width="20%">From</td>
            <td width="15%" class="order-date">Date</td>
            <td width="40%">TXID</td>
            <td width="10%" align="center">Amount</td>
          </tr>
        </thead>
        <tbody>
          <!--<tr>
            <td align="center"><b>1</b></td>
            <td>3453DFGGDFT34534545646</td>
            <td class="address"><a href="https://chainz.cryptoid.info/pivx/address.dws?D8f2XugFex5p1RZJKYHQNXHFE6Xs6Pmrgm.htm">D8f2XugFex5p1RZJKYHQNXHFE6Xs6Pmrgm</a></td>
            <td>2019-07-13 11:32:55</td>
            <td class="txid"><a href="https://chainz.cryptoid.info/pivx/tx.dws?0955b698c55f61f7215a3eaab1f100909102d166c800a9ea199b995e948203f2.htm">0955b698c55f61f7215a3eaab1f100909102d166c800a9ea199b995e948203f2</a></td>
            <td align="center">11,119</td>
          </tr>-->
          <tr>
            <td colspan="6" align="center"><h4>You have no transactions yet.</h4></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transactions',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
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
