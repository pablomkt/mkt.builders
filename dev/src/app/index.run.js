(function() {
  'use strict';

  angular
    .module('dev')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
