(function(){

var app = angular.module('store' , []);

    app.controller("StoreController", function() { 
        this.products = gems;
    });
    
    var gems = [{
        name: "Dodecahedron",
        price: 2.95, 
        description: "Description of dodecahedron 10",
        canPurchase: true,
        soldOut: false,
    },
    {
        name: "Pentahedron",
        price: 5.95, 
        description: "Description of pentahedron 5",
        canPurchase: true,
        soldOut: false,
        
    }
    
    ];
})();