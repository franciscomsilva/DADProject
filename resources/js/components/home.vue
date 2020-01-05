<template>
	<div>
		<div class="jumbotron">
            <h1 class="text-center">{{ title }}</h1>
        </div>

        <h2 class="text-center">Bien Venidos</h2>

        <h4 class="text-center">Total ammount of wallets: {{ walletCount }}</h4>
	</div>
</template>


<script>
export default {
	data: function() {
		return {
			title: 'Virtual Wallet',
			walletCount: 0
		};
	},
	methods: {
		getWalletCount: function() {
			axios.get('api/walletCount')
				.then(response=>{this.walletCount = response.data});
		}
	},
	mounted: function() {
		this.getWalletCount();
	}

	
};


</script>


<style> </style>