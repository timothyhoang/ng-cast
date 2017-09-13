angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(params, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {key: params.key || YOUTUBE_API_KEY, q: params.query || 'puppies', maxResults: params.maxResults || 5, videoEmbeddable: 'true', type: 'video', part: 'snippet'}
    }).then(function(response) {
      console.log('success');
      callback(response.data.items);
    }, function(response) {
      console.log('failed', response);
    });
  };

  this.getStatistics = function(params, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/videos',
      params: {key: params.key || YOUTUBE_API_KEY, part: 'statistics', id: params.id}
    }).then(function(response) {
      console.log('success');
      callback(response.data.items[0].statistics);
    }, function(response) {
      console.log('failed', response);
    });
  };
});
