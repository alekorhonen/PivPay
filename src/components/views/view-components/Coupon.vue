<template>
    <div class="coupons bootstrap-wrapper">
        <div class="section-header">
            <div class="wrapper">
                <h3>Create coupon</h3>
                <div class="button-right">
                    <router-link to="/coupons" class="primary-button">Go back</router-link>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="alert alert-success">
                <span class="alert-icon"><font-awesome-icon icon="check-circle" /></span>
                <div class="alert-content">
                    <b>Success</b>
                    <p>Your coupon was successfully saved!</p>
                </div>
            </div>
            <div class="alert alert-failure">
                <span class="alert-icon"><font-awesome-icon icon="times-circle" /></span>
                <div class="alert-content">
                    <b>Error</b>
                    <p>Something unexpected happen, please contact the techincal team.</p>
                </div>
            </div>
            <form @submit.prevent="updateCoupon">
                <div class="panel">
                    <div class="panel-body">
                        <div class="form-group">
                            <label>Code</label>
                            <input type="text" class="form-control" placeholder="Coupon code" v-model="discountCode">
                        </div>
                        <div class="form-group">
                            <label>Discount</label>
                            <vue-slider v-model="discountValue" :tooltip-formatter="discountTooltip" :tooltip="'focus'" :use-keyboard="true" min="1" max="100" />
                        </div>
                        <div class="form-group">
                            <label>License</label>
                            <select class="form-control" placeholder="Select license" v-model="licenseNum">
                                <option>All licenses</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Max. discount usages</label>
                            <input type="text" class="form-control" placeholder="Leave blank for unlimited">
                        </div>
                    </div>
                </div>
                <button type="submit" class="primary-button save-coupon">Save coupon</button>
            </form>
        </div>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
    name: 'Coupon',
    components: {
        VueSlider
    },
    data() {
        return {
            discountCode: null,
            licenseNum: null,
            discountValue: 1,
            discountTooltip: '{value}%'
        }
    },
    methods: {
        updateCoupon() {
            
        }
    }
}
</script>

<style scoped>
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 600;
    cursor: pointer;
}

.save-coupon {
    margin-top: 20px;
}
</style>
