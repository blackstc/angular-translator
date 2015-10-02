myApp.directive('ngPickLanguages', function() {
  return {
    restrict: 'E',
    templateUrl: '../../views/pickLanguage.html'
  };
});

myApp.directive('ngQuizForm', function() {
  return {
    restrict: 'E',
    templateUrl: '../../views/quizForm.html'
  };
});

myApp.directive('ngAnswerResponse', function() {
  return {
    restrict: 'E',
    templateUrl: '../../views/answerResponse.html'
  };
});

myApp.directive('ngFailed', function() {
  return {
    restrict: 'E',
    templateUrl: '../../views/failed.html'
  };
});

myApp.directive('ngComplete', function() {
  return {
    restrict: 'E',
    templateUrl: '../../views/complete.html'
  };
});
