var app = angular.module('FlickrSearcher', []);

app.controller('MainCtrl', function($scope, $http) {
  var vm = this;
  
  $scope.submit = function() {
    // for some reason this call isn't working with the params object, so hardcoded for now
    var params = {
      method: 'flickr.photos.search',
      api_key: '8b9d320bb2e3afd7f41840991022165d',
      tags: vm.tag,
      format: 'json',
      nojsoncallback: 1
    };
    $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8b9d320bb2e3afd7f41840991022165d&tags=' + vm.tag + '&format=json&nojsoncallback=1').then(
      function (response) {
        vm.photos = response.data.photos.photo;
      },
      function error(error, status, headers, config){
        console.log('error');
      }
    );
  };

  vm.testHeadlines = ['hi', 'bye', 'stuff', 'things'];
  
});
