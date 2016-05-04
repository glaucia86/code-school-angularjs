(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function() {
		this.produtos = gems;	
	});

	var gems = [
		{ nome: 'Azurite', preco: 2.95 },
		{ nome: 'Bloodstone', preco: 5.95 },
		{ nome: 'Zircon', preco: 3.95 },
	];
})();