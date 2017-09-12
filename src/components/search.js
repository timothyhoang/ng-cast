angular.module('video-player')

.component('search', {
  bindings: {
    videos: '<',
    searchResults: '<'
  },
  controller: function(youTube) {
    console.log(this);
    this.query = '';
    this.search = () => {
      var params = {
        query: this.query
      };
      youTube.search(params, this.searchResults);
    };
    this.result = () => {
      
    };
  },
  
  templateUrl: 'src/templates/search.html'
});
