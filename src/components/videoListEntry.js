angular.module('video-player')
.controller('videoListEntryCtrl', function($scope) {
})
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoListEntry.html',
    controller: 'videoListEntryCtrl'
  };
});
