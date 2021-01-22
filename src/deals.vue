<template>
  <div class="deals-list">

		<DealThumbnail
	    v-for="deal in deals"
	    :deal="deal"
	    :key="deal.id"
    ></DealThumbnail>

  </div>
</template>

<script>
	import DealThumbnail from './deal-thumbnail.vue'
  import db from './json-server/db.json'

	export default {
		components: { DealThumbnail },
		data () {
			return {
				deals: null,
				// deal: null
			}
		},
		// mounted: function() {
		// 	// var routeid = route.query.id
		// 	// console.log(routeid)
		// 	fetch('http://localhost:3000/deals')
		// 		.then((response) => {
		// 			return response.json()
		// 		})
		// 		.then((data) => {
		// 			this.deals = data
		// 		})
		// },
	  // components: { dealThumbnail },

		created() {
    	fetch('http://localhost:3000/deals')
				.then((response) => {
					return response.json()
				})
				.then((data) => {
          if (data) {
  					this.deals = data
            // console.log(db.deals)
          }
          else {
            this.deal = db.deals
          }
				})
	    // const deal = deals.find(deal => deal.id == this.$route.params.id)
	    // if (deal) {
	    //   this.deals = [deal]
      //   console.log(this.$route.params.id);
			// 	console.log(this.deals)
	    // }
			// else {
			// 	fetch('http://localhost:3000/deals?')
			// 		.then((response) => {
			// 			return response.json()
			// 		})
			// 		.then((data) => {
			// 			this.deals = data
			// 		})
			// }
  	},

	};
</script>
