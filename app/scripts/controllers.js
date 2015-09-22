angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  var conta1 = new Conta();
  conta1.nome = 'Condomínio';
  conta1.valor = 100;

  var conta2 = new Conta();
  conta2.nome = 'Carro'
  conta2.valor = 620;

  var conta3 = new Conta();
  conta3.nome = 'Casa';
  conta3.valor = 550;

  $scope.mes = new Mes();
  $scope.mes.addConta(conta1);
  $scope.mes.addConta(conta2);
  $scope.mes.addConta(conta3);


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
