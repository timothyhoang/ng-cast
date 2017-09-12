angular.module('video-player')

.component('search', {
  bindings: {
    searchResults: '<',
    result: '<',
    service: '<'
  },  
  templateUrl: 'src/templates/search.html'
});
