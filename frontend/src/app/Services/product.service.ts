import { Injectable } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({ 
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  getAllProducts(){

  return [{"id":1,"name":"Samsung","price":4000,"photo":"../assets/images/samsung.jpg",'Quantity':0},
    {"id":2,"name":"Acer","price":5000,"photo":"../assets/images/acer.jpg",'Quantity':0},
    {"id":3,"name":"Apple","price":6000,"photo":"../assets/images/apple.jpg",'Quantity':0},
    {"id":4,"name":"Asus","price":7000,"photo":"../assets/images/asus.jpg",'Quantity':0},
    {"id":5,"name":"Avita","price":8000,"photo":"../assets/images/avita.jpg",'Quantity':0},
    {"id":6,"name":"Dell","price":9000,"photo":"../assets/images/dell.jpg",'Quantity':0},
    {"id":7,"name":"Hp","price":3000,"photo":"../assets/images/hp.jpg",'Quantity':0}] 
  }
  addProductToCart(prodcuts: any) {
    localStorage.setItem("product", JSON.stringify(prodcuts));
  }

  getProductFromCart() {
    //return localStorage.getItem("product");
    return JSON.parse(localStorage.getItem('product'));
  }

  removeAllProductFromCart() {
    return localStorage.removeItem("product");
  }
}
