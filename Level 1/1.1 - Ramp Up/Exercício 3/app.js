(function(){
	var app = angular.module('store', []);

	/*O controller deve estar incluído dentro da app */
	app.controller('StoreController', function() {
		this.produto = gem;

	});

	/* Storing Data - dentro do Controller */
	var gem = {
		nome: 'Mouse',
		preco: 15.90,
		descricao: 'Mouse optico - Microsoft'
	}
})();