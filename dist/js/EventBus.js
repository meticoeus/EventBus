(function(){ "use strict"; angular.module('eventBus', []); })();
(function(){ "use strict"; "use strict";

/**
 * Small convenience wrapper around Angular's $rootScope event bus functionality.
 *
 * Adds support for propagating events on only the root scope while still
 * deregistering the listener when its scope is destroyed.
 */
angular.module('eventBus')
  .factory('EventBus', ['$rootScope', function ($rootScope) {
    var EventBus = {
      broadcast: null,
      on: null
    };

    // publish a message to a topic
    EventBus.broadcast = function (topic, message) {
      $rootScope.$emit(topic, message);
    };

    // subscribe to a topic
    EventBus.on = function (topic, handler, scope) {
      var unregister = $rootScope.$on(topic, handler);

      if (scope && scope.$on) scope.$on('$destroy', unregister);
    };

    return EventBus;
  }]); })();