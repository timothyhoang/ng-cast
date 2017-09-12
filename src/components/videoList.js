angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '<',
    onClick: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});
