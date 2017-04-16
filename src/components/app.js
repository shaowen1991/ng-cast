angular.module('video-player')
.controller('appCtrl', function($scope, youTube) {
  this.selectVideo = (clickedVideo) => {
    this.currentVideo = clickedVideo;
  };
  this.searchResults = (query) => {
    youTube.search(query, (data) => {
      this.currentVideo = data[0];
      this.videos = data; 
    });
  };
  this.currentVideo = {};
  this.videos = []; 
  youTube.search('overwatch', (data) => {
    this.currentVideo = data[0];
    this.videos = data; 
  });
})
.directive('app', function() {
  return {
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html',
    controller: 'appCtrl'
  };
});
