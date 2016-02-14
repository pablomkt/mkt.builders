(function() {
  'use strict';

  angular
    .module('dev')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;

    vm.classAnimation = '';
    vm.showToastr = showToastr;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Envianos un email <a href="mailto:sales@mkt.builders"><b>sales@mkt.builders</b></a>');
      vm.classAnimation = '';
    }

  }
})();
