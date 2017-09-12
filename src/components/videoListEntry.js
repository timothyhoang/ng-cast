angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    selectVideo: '<',
    index: '<'
  },
  controller: function() {

    this.onClick = (index) => {
      this.selectVideo(index);
    };

    this.nameVideo = () => {
      console.log(this.video);
    };
    
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
