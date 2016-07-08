var app = angular.module('FlickrSearcher', []);

app.controller('MainCtrl', function($scope, $http) {
  var vm = this;
  vm.searching = 1;
  
  $scope.submit = function() {
    vm.searching = 2;
    var params = {
      method: 'flickr.photos.search',
      api_key: '8b9d320bb2e3afd7f41840991022165d',
      tags: vm.tag,
      format: 'json',
      nojsoncallback: 1
    };
    
    $http.get('https://api.flickr.com/services/rest/', {params: params}).then(
      function (response) {
        vm.photos = response.data.photos.photo;
        vm.searching = 3;
        vm.oldTag = vm.tag;
        vm.tag = "";
      },
      function error(error){
        console.log('error')
      }
    );
  };
});
