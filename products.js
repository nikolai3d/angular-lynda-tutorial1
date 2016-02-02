    
    (function(){
    
    var app = angular.module('store-products', []);
    
    app.directive('productTitle', function() {
        //Note: dash in HTML translates into camelCase in Javascript
        //So this is to define a custom directive <product-title>
        return {
            //A configuration object defining how your directive will work.
            restrict: 'E',
            templateUrl: 'product-title.html' //HTML template URL to load from
        };
    });

    app.directive('productPanels', function() {
        //Note: dash in HTML translates into camelCase in Javascript
        //So this is to define a custom directive <product-panels>
        return {
            //A configuration object defining how your directive will work.
            restrict: 'E', //Type of directive, 'E' stands for Element
            // Other option is 'A' for Attribute, for Attribute Directives.
            templateUrl: 'product-panels.html', //HTML template URL to load from
            controller: function() {
                this.tab = 1;

                this.selectTab = function(iNewTab) {
                    this.tab = iNewTab;
                };
                this.isSelected = function(iTabIndex) {
                    return this.tab === iTabIndex;
                };
            },
            controllerAs: 'panel' //From HTML, controller will be referred to as "panel"
        };
    });
    })();