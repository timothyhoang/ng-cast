angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.videos = null;
    this.currentVideo = null;
    this.service = youTube;
    
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    
    this.searchResults = (videos) => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };

    this.result = function() {
      var params = {
        query: this.query
      };
      this.service.search(params, this.searchResults);
    };

    youTube.search({q: 'puppies'}, this.searchResults);
  },
  templateUrl: 'src/templates/app.html'
});
