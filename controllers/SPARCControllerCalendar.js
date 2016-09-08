geodash.controllers["SPARCControllerCalendar"] = function(
  $scope,
  $element,
  $controller,
  $interpolate,
  state,
  map_config,
  live)
{
  angular.extend(this, $controller('GeoDashControllerBase', {$element: $element, $scope: $scope}));

  $scope.state = state;
  $scope.months = MONTHS_ALL;

  $scope.$on("refreshMap", function(event, args){
    if("state" in args)
    {
      $scope.state = args["state"];
    }
  });

  $scope.linkForMonth = function(month)
  {
    return $interpolate(geodash.api.getPage("countryhazardmonthdetail"))({ state: $scope.state, month: month });
  };
};
