angular.module('video-player')

.component('app', {
  // TODO 
  bindings: {
    // videos: '<'
  },
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index]; //placeholder value
    };
    this.searchResults = (videos) => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };
  },
  templateUrl: 'src/templates/app.html'
});
