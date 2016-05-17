(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;	
	});

	var gems = [
		{ name: 'Dodecahedron Gem', price: 2.95, description: '...' },
		{ name: 'Bloodstone', price: 5.95, description: '...'  },
		{ name: 'Zircon', price: 3.95, description: '...'  },
	];
})();