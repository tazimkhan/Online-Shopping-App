import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductService } from '../Services/product.service';



@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
}) 
export class MycartComponent implements OnInit {

  public space="     ";
  dafualtQuantity:number=1;
  productAddedTocart:Product[];
  allTotal:number;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productAddedTocart=this.productService.getProductFromCart();
    for (let i in this.productAddedTocart) {
      this.productAddedTocart[i].Quantity=1;
         }
   this.productService.removeAllProductFromCart();
   this.productService.addProductToCart(this.productAddedTocart);
   this.calculteAllTotal(this.productAddedTocart);
  }

  
  onAddQuantity(product:Product)
  {
    this.productAddedTocart=this.productService.getProductFromCart();
    this.productAddedTocart.find(p=>p.id==product.id).Quantity = product.Quantity+1;
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
   
  }
  onRemoveQuantity(product:Product)
  {
    this.productAddedTocart=this.productService.getProductFromCart();
    this.productAddedTocart.find(p=>p.id==product.id).Quantity = product.Quantity-1;
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);

  }
  calculteAllTotal(allItems:Product[])
  {
    let total=0;
    for (let i in allItems) {
      total= total+(allItems[i].Quantity *allItems[i].price);
   }
   this.allTotal=total;
  }
 
}
