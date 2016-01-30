(function(){

var app = angular.module('store' , []);

    app.controller("StoreController", function() { 
        this.products = gems;
    });
    
    var gems = [{
        name: "Dodecahedron",
        price: 2.00, 
        description: "Description of dodecahedron 10",
        canPurchase: true,
        soldOut: false,
        images: [
            {
                full: "assets/gemd1.png",
                thumb: "assets/gemd1_thumb.png",
            }
            ,
            {
                full: "assets/gemd2.png",
                thumb: "assets/gemd2_thumb.png",
            }
            ]
    },
    {
        name: "Pentahedron",
        price: 5.95, 
        description: "Description of pentahedron 5",
        canPurchase: true,
        soldOut: false,
        images: [
            {
                full: "assets/p1.png",
                thumb: "assets/p1_thumb.png",
            }
            ,
            {
                full: "assets/p2.png",
                thumb: "assets/p2_thumb.png",
            }
            ]
        
    }
    
    ];
})();