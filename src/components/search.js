angular.module('video-player')

.component('search', {
  bindings: {
    searchResults: '<',
    result: '<',
    service: '<'
  },
  // controller: function (youTube) {
  //   this.search = () => {
  //     console.log(this);
  //     var params = {
  //       query: this.query
  //     };
  //     youTube.search(params, this.searchResults);
  //   };
  // },
  templateUrl: 'src/templates/search.html'
});
