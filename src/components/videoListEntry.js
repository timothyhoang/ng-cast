angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  controller: function() {
    
    this.nameVideo = () => {
      console.log(this.video);
    };
    
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
