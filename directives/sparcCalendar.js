geodash.directives["sparcCalendar"] = function(){
  return {
    restrict: 'EA',
    replace: true,
    scope: true,  // Inherit exact scope from parent controller
    templateUrl: 'sparc_calendar.tpl.html',
    link: function ($scope, element, attrs){
    }
  };
};
