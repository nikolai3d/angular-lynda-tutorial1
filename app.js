(function(){

var app = angular.module('store' , ['store-products']);

    app.controller("StoreController", ['$http', function($http) {
    
    //Dependency injection: we need an $http service!
    
           var gemsPromise = $http({method: 'GET', url: 'products.json'});
    //Using Angular $http service to make async request to the server.
    
    //Other way would be:
    //var gemsPromise = $http.get('/products.json', {apiKey: 'myApiKey'});
    
    //BOTH return a promise object
    
    //Since we told $http to fetch JSON, the result will be automatically decoded into 
    //Javascript objects and arrays
    
        var store = this; //Extra variable so we can refer to store from the callback.
    
        store.products = []; //We need to initialize before request so page has something to show while loading.
        
        gemsPromise.then(function(response)
            {
                //SUCCESS!
            store.products = response.data;
            }, 
        function(response) {
    var data = response.data,
        status = response.status,
        header = response.header,
        config = response.config;
    // error handler
        alert("JSON Fetch Error!");
        });

       
    }]);
    
    
    app.controller("PanelController", function(){
       
    });
    
    app.controller("ReviewController", function(){
        this.review = {};
        
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {}; //Clear out the form data to clear out the form view, after pushing the review.
        };
    });
    
     
    
    
})();