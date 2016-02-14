(function () {
  'use strict';
  angular
    .module('dev')
    .directive('scrollOnClick', function () {
      return {
        restrict: 'A',
        link: function (scope, $elm, attrs) {
          var idToScroll = attrs.href;
          $elm.on('click', function () {
            var $target;
            if (idToScroll) {
              $target = $(idToScroll);
            } else {
              $target = $elm;
            }
            $("body").animate({scrollTop: $target.offset().top}, "slow");
          });
        }
      }
    })
    .directive('mktNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
