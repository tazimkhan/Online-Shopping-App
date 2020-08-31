import { Component,Input,OnInit } from '@angular/core';
import { SharedService } from './Services/shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo-Shopping';
  cartItemCount:number;
  constructor(private sharedService:SharedService,private _authService:AuthService,private router:Router){}
  ngOnInit()
  {
    this.sharedService.currentMessage.subscribe(msg => this.cartItemCount = msg);
  }

  goToHome(){
    if(this._authService.loggedIn()){
      this.router.navigate(['/productdisplay']);
      console.log('aaa')
    }else{
      this.router.navigate(['/login']);
      console.log('b')
    }
  }
}