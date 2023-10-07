import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  
  constructor(private _HttpClient: HttpClient) { }
  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`;
  wishlistNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  addToWishlist(productId:any):Observable<any> {
return this._HttpClient.post(this.baseUrl+`wishlist`,
{
  productId:productId
}
);
}
   getWishlistUser(): Observable<any> {
  return this._HttpClient.get(this.baseUrl + 'wishlist');
}
   removeWishlistItem(productId:any):Observable<any>{
  return this._HttpClient.delete(this.baseUrl + `wishlist/${productId}`);
}
}
