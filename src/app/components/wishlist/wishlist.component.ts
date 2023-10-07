import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { Product } from 'src/app/core/interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  products: Product[] = [];
  wishlistData: string[] = [];
  constructor( private _CartService: CartService,
    private _WishlistService: WishlistService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2) {

    
  }
  ngOnInit(): void {
    this.getwishList();

  }

  getwishList(){
  this._WishlistService.getWishlistUser().subscribe({
    next:(response)=>{
  this.products=response.data;
  //this.wishlistData=response.data.map((item:any)=>  item._id);
    },
    error:(e)=>{
  
    }
   })
  }
  addProduct(id: any, element: HTMLButtonElement): void {
    this._Renderer2.setAttribute(element, 'disabled', 'true');

    this._CartService.addToCart(id).subscribe({
      next: (response) => {
       // console.log(response);
       // console.log(response.message);
        this._ToastrService.success(response.message);
        this._Renderer2.removeAttribute(element, 'disabled');

        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, 'disabled');
      },
    });
  }

removefromWish(productId:any):void{
  this._WishlistService.removeWishlistItem(productId).subscribe({
  next:(response)=>{
    this.products= this.products.filter(item => item._id !== productId);
    this._WishlistService.wishlistNumber.next(response.data.length);
    //this.getwishList();
    this._ToastrService.error(response.message);
   // this.wishlistData=response.data;
  } 
  });
  }
}
