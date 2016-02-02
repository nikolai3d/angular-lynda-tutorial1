(function(){

var app = angular.module('store' , ['store-products']);

    app.controller("StoreController", function() { 
        this.products = gems;
    });
    
    
    app.controller("PanelController", function(){
       
    });
    
    app.controller("ReviewController", function(){
        this.review = {};
        
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {}; //Clear out the form data to clear out the form view, after pushing the review.
        };
    });
    

    
    var gems = [{
        name: "Dodecahedron",
        price: 2.00, 
        description: "Description of dodecahedron 10",
        reviews: [
            {
                stars: 5, 
                body: "I Love this product",
                author: "svakhine@gmail.com"
            },
            {
                stars: 1, 
                body: "This product sucks",
                author: "svakhine@adobe.com"
            },
            ],
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
        reviews: [
            {
                stars: 5, 
                body: "I Love this gem",
                author: "svakhine@gmail.com"
            },
            {
                stars: 1, 
                body: "This gem sucks",
                author: "svakhine@adobe.com"
            },
            ],

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