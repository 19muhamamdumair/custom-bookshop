using { my.bookshop as my } from '../db/schema';

service CatalogService @(impl: 'srv/cat-service.js') {

  @Capabilties :{Insertable:true,Deletable:false} 
  entity Books as projection on my.Books actions{
    action addToCart(); 
  };
  @readonly entity Authors as projection on my.Authors;
  entity Orders as projection on my.Orders;

  entity Cart as projection on my.Cart;

// action setOrderOpen(); 
  // function addToCart(input : object) returns Integer;
}
