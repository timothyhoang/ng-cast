angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '&'
  },
  controller: function() {
    
    this.nameVideo = () => {
      // console.log(this.videos);
    };
    
  },
  templateUrl: 'src/templates/videoList.html'
});
