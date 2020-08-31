import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../models/Product.model';
import { SharedService } from '../Services/shared.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
 
@Component({ 
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {
  constructor(private _prod:ProductService,private sharedService:SharedService,private _authService:AuthService,private router:Router) { }
  public allProducts:Product[];
  public global:any;
  productAddedTocart:Product[];
  cartItemCount: number = 0;
  
  ngOnInit() {
    if(this._authService.loggedIn){
        this.global=this._prod.getAllProducts();
        this.allProducts=this.global;
    }else{
      this.router.navigate(['/login'])
    }
  }
   
  OnAddCart(product:Product,add){
      console.log(product);   
      this.productAddedTocart=this._prod.getProductFromCart();

              if(this.productAddedTocart==null)
              {
                this.productAddedTocart=[];
                this.productAddedTocart.push(product);
                this._prod.addProductToCart(this.productAddedTocart);
                if(add.value==='Add to Cart'){
                     add.value='Remove Item';
                }
              }   
              else{
                let tempProduct=this.productAddedTocart.find(p=>p.id==product.id);
                if(tempProduct==null)
                {
                  this.productAddedTocart.push(product);
                  this._prod.addProductToCart(this.productAddedTocart);
                  if(add.value==='Add to Cart'){
                    add.value='Remove Item';
               }
                  }
                else
                {
                    for(let i=0;i<this.productAddedTocart.length;i++){
                        if(this.productAddedTocart[i].id==product.id){
                          this.productAddedTocart.splice(i,1)
                        }
                    }
                    this._prod.addProductToCart(this.productAddedTocart);
                    if(add.value==='Remove Item'){
                      add.value='Add to Cart';
                 }
                }
              }
              this.cartItemCount=this.productAddedTocart.length;
              this.sharedService.updateCartCount(this.cartItemCount);
  }
}
