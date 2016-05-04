(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.produto = gem;
  });

  var gem = {
    nome: 'Azurite',
    preco: 110.50,
    podeVender: false,
    jaVendido: true
  };
})();
