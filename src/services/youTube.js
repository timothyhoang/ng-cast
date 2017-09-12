angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  // this.videos = exampleVideoData;
  this.search = function(params, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {key: params.key || YOUTUBE_API_KEY, q: params.query || 'puppies', maxResults: params.maxResults || 5, videoEmbeddable: 'true', type: 'video', part: 'snippet'}
    }).then(function(response) {
      callback(response.items);
    }, function(response) {
      console.log('failed:', response);
    });
  };
});
