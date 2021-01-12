<template>
  <div id="app" class="app">
    <div class="deals-list">


    <!-- <app-coupon></app-coupon>
				<app-work-sheduller></app-work-sheduller> -->
		<deal-thumbnail
    v-for="deal in deals"
    :deal="deal"
    :key="deal.id"
    ></deal-thumbnail>
    </div>
    <!-- <div class="">

    </div> -->
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      deals: []
    }
  },
  mounted: function() {
    fetch('http://localhost:3000/deals?in_top=false')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.deals = data
      })
  },
};


</script>

<style scoped>
@import './assets/css/app.css';
</style>
