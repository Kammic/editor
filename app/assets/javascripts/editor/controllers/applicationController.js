ApplicationController = ["$scope", "$rootScope", "github", function($scope, $rootScope, github) {
  var context = this;

  $scope.$on('previewLoaded', function(e) {
    $(window).resize();
  });

  $rootScope.$on('notify', function(e, message){
    $.growl({ title: "Growl", message: message});
  });

  github.init(env.auth_token).then(function() {
    $scope.$emit('githubLoaded');
  });

  key('esc', function(){
    $scope.$emit('toggleMenu');
  });
}];
