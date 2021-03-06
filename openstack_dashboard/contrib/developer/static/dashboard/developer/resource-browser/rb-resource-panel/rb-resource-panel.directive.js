/*
 * (c) Copyright 2015 Hewlett Packard Enterprise Development Company LP
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
  'use strict';

  angular
    .module('horizon.dashboard.developer.resource-browser')
    .directive('rbResourcePanel', directive);

    directive.$inject = ['horizon.dashboard.developer.basePath'];

    /**
     * @ngdoc directive
     * @name rb-resource-panel
     * @description
     * A simple directive that extracts a resource type name from the route
     * and uses it to display a generic resource table
     */

    function directive(path) {
      var directive = {
        restrict: 'E',
        templateUrl: path + 'resource-browser/rb-resource-panel/rb-resource-panel.html',
        scope: {

        },
        controller: 'horizon.dashboard.developer.resource-browser.rbResourcePanelController as ctrl'
      };

      return directive;
    }
})();

