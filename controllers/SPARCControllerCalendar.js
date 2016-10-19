geodash.controllers["SPARCControllerCalendar"] = function($scope, $element, $controller, $interpolate)
{
  angular.extend(this, $controller('GeoDashControllerBase', {$element: $element, $scope: $scope}));

  var mainScope = $element.parents(".geodash-dashboard:first").isolateScope();
  $scope.dashboard = geodash.util.deepCopy(mainScope.dashboard);
  $scope.state = geodash.util.deepCopy(mainScope.state);
  $scope.months = MONTHS_ALL;

  $scope.$on("refreshMap", function(event, args)
  {
    $scope.state = geodash.util.deepCopy(args.state);
  });

  $scope.linkForMonth = function(month)
  {
    return $interpolate(geodash.api.getPage("countryhazardmonthdetail"))({ state: $scope.state, month: month });
  };
};
