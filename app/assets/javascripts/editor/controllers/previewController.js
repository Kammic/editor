PreviewController = ["$scope", "$rootScope", "$sce", function($scope, $rootScope, $sce) {
  $scope.$element = $('#preview');
  var mdConverter = new Showdown.converter();

  var mdToHTML = function(md) {  
    return mdConverter.makeHtml(md);
  }

  var updatePreview = function(rawText) {
    $scope.preview = mdToHTML(rawText);
  }

  $scope.previewHtml = function() {
    return $sce.trustAsHtml($scope.preview);
  }

  $scope.$element.click(function() {
    $scope.$emit('hideMenu');
  });

  $rootScope.$on('markdownUpdated', function(e, rawText) {
    if($scope.$$phase == '$apply')
      updatePreview(rawText);
    else {
      $scope.$apply(function() {
        updatePreview(rawText);
      });
    }
  });

  $scope.$emit('previewLoaded');
}];
