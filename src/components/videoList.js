angular.module('video-player')
.controller('videoListCtrl', function($scope) {
})
.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      onClick: '<',
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoList.html',
    controller: 'videoListCtrl'
  };
});
