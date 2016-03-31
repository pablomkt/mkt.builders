(function() {
  'use strict';

  angular
    .module('dev')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.classAnimation = '';

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = '';
      }, 4000);
    }

    angular.element('body').on('click', '.cerrarModal', function(e) {
      e.preventDefault();
      angular.element('#emailContact').addClass('hidden');
    });

    vm.open = function () {
      angular.element('#emailContact').removeClass('hidden');
    };

  }
})();
