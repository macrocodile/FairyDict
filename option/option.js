// Generated by CoffeeScript 1.10.0
var dictApp;

dictApp = angular.module('fairyDictApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize']);

dictApp.controller('optionCtrl', function($scope, $sce) {
  var code;
  console.log("[optionCtrl] init");
  $scope.allSK = ['', 'Ctrl', 'Shift', 'Alt'];
  $scope.allLetters = (function() {
    var i, ref, ref1, results;
    results = [];
    for (code = i = ref = 'A'.charCodeAt(0), ref1 = 'Z'.charCodeAt(0); ref <= ref1 ? i <= ref1 : i >= ref1; code = ref <= ref1 ? ++i : --i) {
      results.push(String.fromCharCode(code));
    }
    return results;
  })();
  $scope.extraKeys = Object.keys(window.utils.extraKeyMap);
  $scope.allKeys = $scope.allLetters.concat($scope.extraKeys);
  $scope.changeKey = function(value, key) {
    $scope.setting[key] = value;
    return chrome.runtime.sendMessage({
      type: 'save setting',
      key: key,
      value: value
    });
  };
  return chrome.runtime.sendMessage({
    type: 'setting'
  }, function(config) {
    $scope.setting = config;
    return $scope.$apply();
  });
});
