import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.css']
})
export class ThanksPageComponent implements OnInit {

  public date=new Date();
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
