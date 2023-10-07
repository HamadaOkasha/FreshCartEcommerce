import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/core/interfaces/category';
import { Product } from 'src/app/core/interfaces/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CuttextPipe,
    CarouselModule,
    RouterLink,
    SearchPipe,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _ProductService: ProductService,
    private _CartService: CartService,
    private _WishlistService: WishlistService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2
  ) {}

  products: Product[] = [];
  catgories: Category[] = [];
  wishlistData: string[] = [];
  term: string = '';

  ngOnInit(): void {
    
    this._ProductService.getProducts().subscribe({
      next: (response) => {
        console.log('products', response.data);
        this.products = response.data;
      },
    });

    this._ProductService.getCategories().subscribe({
      next: (response) => {
        console.log('Categories', response);
        this.catgories = response.data;
      },
    });
    this._WishlistService.getWishlistUser().subscribe({
      next: (response) => {
        this.wishlistData=response.data.map((item:any)=>  item._id);
      },
    });
  }

  //                  button refrence (btnAdd)
  addProduct(id: any, element: HTMLButtonElement): void {
    this._Renderer2.setAttribute(element, 'disabled', 'true');

    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        console.log(response.message);
        this._ToastrService.success(response.message);
        this._Renderer2.removeAttribute(element, 'disabled');

        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, 'disabled');
      },
    });
  }

addToWish(productId:any):void{
this._WishlistService.addToWishlist(productId).subscribe({
next:(response)=>{
  this._ToastrService.success(response.message);
  this.wishlistData= response.data;
  //console.log(response.count,"this._WishlistService.wishlistNumber.next(response.count);");
  this._WishlistService.wishlistNumber.next(response.data.length);
}

});
}
removefromWish(productId:any):void{
  this._WishlistService.removeWishlistItem(productId).subscribe({
  next:(response)=>{
    this._ToastrService.error(response.message);
    this.wishlistData=response.data;
    //console.log(response,"response");
    //console.log(response.data.length,"this._WishlistService.wishlistNumber.next(response.count);");
  this._WishlistService.wishlistNumber.next(response.data.length);
  }
  
  });
  }
  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['next', 'prev'],
    autoplay: true,
    autoplayTimeout: 7000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };

  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    navText: ['next', 'prev'],
    items: 1,
    nav: false,
  };
}
