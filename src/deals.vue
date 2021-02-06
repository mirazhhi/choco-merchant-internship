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
			}
		},

		created() {
      let gets = location.search.substr(1).split("&").join('&')

    	fetch('http://localhost:3000/deals?' + gets)
				.then((response) => {
					return response.json()
				})
				.then((data) => {
          if (data) {
            console.log(data)
  					this.deals = data
          } else {
            this.deals = db.deals
          }
				})
  	},

	};
</script>
