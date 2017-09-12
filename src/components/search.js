angular.module('video-player')

.component('search', {
  bindings: {
    videos: '<'
  },
  controller: function(youTube) {
    this.query = "";
    this.search = () => {
      var params = {
        query: this.query
      };
      console.log(this.query);
      youTube.search(params, function() {console.log(data);});
    };
    this.result = () => {
      
    };
  },
  
  templateUrl: 'src/templates/search.html'
});
