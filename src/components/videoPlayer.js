angular.module('video-player')
.controller('videoPlayerCtrl', function($scope) {
})
.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html',
    controller: 'videoPlayerCtrl'
  };
});
