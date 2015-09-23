angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Mes) {

  $scope.mes = Mes.get();

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
})

.controller('ContaCtrl', function($scope, $stateParams, Mes) {

  $scope.conta = new Conta();
  $scope.mes = Mes.get();

  $scope.salvar = function(){

      $scope.mes.addConta($scope.conta);
      $scope.conta = new Conta();
  };
     
});
