angular.module('video-player')

.component('app', {
  // TODO 
  bindings: {
    // videos: '<'
  },
  controller: function() {
    this.selected = 0;
    this.videos = exampleVideoData;
    this.selectVideo = (index) => {
      this.selected = index;
    };
  },
  templateUrl: 'src/templates/app.html'
});
