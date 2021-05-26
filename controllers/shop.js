const Product = require('../models/products');

exports.getProducts = (request,response,next)=>{

    Product.fecthAll(products=>{
        response.render('shop/product-list',{prods:products,pageTitle:'My Shop',path:'/products'});
    });
    
}

exports.getIndex = (request,response,next)=>{
    Product.fecthAll(products=>{
        response.render('shop/index',{prods:products,pageTitle:'My Shop',path:'/'});
    });
}

exports.getCart = (request,response,next)=>{
    response.render('shop/cart',{pageTitle:'Your Cart',path:'/cart'});
}

exports.getOrders = (request,response,next)=>{
    response.render('shop/orders',{pageTitle:'Orders',path:'/orders'});
}

exports.getCheckout = (request,response,next)=>{
    response.render('shop/checkout',{pageTitle:'Checkout',path:'/checkout'});
}