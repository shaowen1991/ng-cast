angular.module('video-player')
.service('youTube', function($http, $window) {
  this.search = (query, callback) => {
    $http.get(
      //url
      'https://www.googleapis.com/youtube/v3/search',
      //parameters for API
      {params: {
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true',
        key: $window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        timeout: 500
      }})
     .then(function(data) {
        //when success load data
       console.log('$get success');
       data = data.data.items;
       callback(data); 
     }, function(data) {
         //when failed to load data
       console.log('$get failed');
     });
  };
});
