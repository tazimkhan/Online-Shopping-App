import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  productAddedTocart:Product[];
  allTotal:number;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productAddedTocart=this.productService.getProductFromCart();
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
