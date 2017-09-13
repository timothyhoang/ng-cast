angular.module('video-player')
.component('videoDetails', {
  bindings: {
    video: '<',
    selectVideo: '<'
  },
  controller: function(youTube) {
    this.statistics = null;

    this.onClick = function() {
      console.log(this.video);
    };

    this.getStatistics = (statistics) => {
      console.log(statistics);
      this.statistics = statistics;
      console.log(this.statistics);
      console.log(this);
    };

    this.$onInit = () => {
      youTube.getStatistics({ id: this.video.id.videoId, part: 'statistics' }, this.getStatistics);
    };
  },
  templateUrl: 'src/templates/videoDetails.html'
});
