angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('HelpCtrl', function($scope, $ionicActionSheet) {
  $scope.showDetails = function(){
		$ionicActionSheet.show({
			buttons: [{ text: 'Complete' }],
			destructiveText: 'Delete',
			titleText: 'Update Todo',
			cancelText: 'Cancel',
			buttonClicked: function(index){
				return true;
			}
		});
	}
});
