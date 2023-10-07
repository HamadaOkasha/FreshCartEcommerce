import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss'],
})
export class NavBlankComponent implements OnInit {
  constructor(
    private _Router: Router,
    private _CartService: CartService,
    private _Renderer2: Renderer2,
    private _WishlistService: WishlistService,
  ) {}

  @ViewChild('navBar') navElement!: ElementRef; // element

  @HostListener('window:scroll')
  onScroll(): void {
    if (scrollY > 500) {
      this._Renderer2.addClass(this.navElement.nativeElement, 'px-5');

      this._Renderer2.addClass(this.navElement.nativeElement, 'shadow');
    } else {
      this._Renderer2.removeClass(this.navElement.nativeElement, 'px-5');
      this._Renderer2.removeClass(this.navElement.nativeElement, 'shadow');
    }
  }

  cartNum: number = 0;
  wishlistNumber: number = 0;
 
  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next: (data) => {
        this.cartNum = data;
        console.log(this.cartNum,'obsercard')
      },
    });

    this._WishlistService.wishlistNumber.subscribe({
      next: (data) => {
        this.wishlistNumber = data;
        console.log(this.wishlistNumber,'obserwish')
      },
    });

    this._CartService.getCartUser().subscribe({
      next: (response) => {
        this.cartNum = response.numOfCartItems;
        console.log(this.cartNum,'funccard')
      },
    });
    
    // this._WishlistService.getWishlistUser().subscribe({
    //   next: (response) => {
    //     this.wishlistNumber = response.count;
    //     console.log(this.wishlistNumber,'funcwish')
    //   },
    // });
    this._WishlistService.getWishlistUser().subscribe({
      next:(response)=>{
        this.wishlistNumber = response.count;
        console.log( response,'funcwishres')
        console.log(this.wishlistNumber,'funcwish')
      },
      error:(e)=>{
      }
     })
  }

  signOut(): void {
    localStorage.removeItem('etoken');
    this._Router.navigate(['/login']);
  }
}
