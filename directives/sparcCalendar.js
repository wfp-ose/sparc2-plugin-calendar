geodash.directives["sparcCalendar"] = function(){
  return {
    controller: geodash.controllers.SPARCControllerCalendar,
    restrict: 'EA',
    replace: true,
    scope: {},  // Inherit exact scope from parent controller
    templateUrl: 'sparc_calendar.tpl.html',
    link: function ($scope, element, attrs, controllers)
    {
      setTimeout(function(){ geodash.ui.update(element); }, 0);
    }
  };
};
