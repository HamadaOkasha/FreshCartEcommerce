"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[80],{5080:(C,h,i)=>{i.r(h),i.d(h,{WishlistComponent:()=>E});var l=i(6814),p=i(1120),v=i(8129),t=i(4769),_=i(6286),m=i(9196),g=i(2425);function c(r,a){if(1&r&&t._UZ(0,"i",18),2&r){const e=a.$implicit,s=t.oxw().$implicit;t.ekj("rating-color",s.ratingsAverage>=e)}}const u=function(r){return["/productdetails",r]},f=function(){return[1,2,3,4,5]};function x(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"i",7),t.NdJ("click",function(){const o=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.removefromWish(o._id))}),t.qZA(),t.TgZ(3,"header",8),t._UZ(4,"img",9),t.TgZ(5,"h3",10),t._uU(6),t.ALo(7,"cuttext"),t.qZA(),t.TgZ(8,"h4",11),t._uU(9),t.qZA(),t.TgZ(10,"div",12)(11,"span"),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.TgZ(14,"p",13),t.YNc(15,c,1,2,"i",14),t.TgZ(16,"span",15),t._uU(17),t.qZA()()()(),t.TgZ(18,"footer")(19,"button",16,17),t.NdJ("click",function(){const o=t.CHM(e).$implicit,d=t.MAs(20),A=t.oxw(2);return t.KtG(A.addProduct(o._id,d))}),t._uU(21," +Add To Cart "),t.qZA()()()()}if(2&r){const e=a.$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(15,u,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("title",e.title)("alt",e.title),t.xp6(2),t.Oqu(t.xi3(7,9,e.title,3)),t.xp6(3),t.Oqu(e.category.name),t.xp6(3),t.hij(" ",t.xi3(13,12,e.price,"e\xa3")," "),t.xp6(3),t.Q6J("ngForOf",t.DdM(17,f)),t.xp6(2),t.hij(" ",e.ratingsAverage," ")}}function T(r,a){if(1&r&&(t.TgZ(0,"section",1)(1,"h2",2),t._uU(2,"WishList Products"),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,x,22,18,"div",4),t.qZA()()),2&r){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.products)}}let E=(()=>{var r;class a{constructor(s,n,o,d){this._CartService=s,this._WishlistService=n,this._ToastrService=o,this._Renderer2=d,this.products=[],this.wishlistData=[]}ngOnInit(){this.getwishList()}getwishList(){this._WishlistService.getWishlistUser().subscribe({next:s=>{this.products=s.data},error:s=>{}})}addProduct(s,n){this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.addToCart(s).subscribe({next:o=>{this._ToastrService.success(o.message),this._Renderer2.removeAttribute(n,"disabled"),this._CartService.cartNumber.next(o.numOfCartItems)},error:o=>{this._Renderer2.removeAttribute(n,"disabled")}})}removefromWish(s){this._WishlistService.removeWishlistItem(s).subscribe({next:n=>{this.products=this.products.filter(o=>o._id!==s),this._WishlistService.wishlistNumber.next(n.data.length),this._ToastrService.error(n.message)}})}}return(r=a).\u0275fac=function(s){return new(s||r)(t.Y36(_.N),t.Y36(m.M),t.Y36(g._W),t.Y36(t.Qsj))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-wishlist"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","py-4",4,"ngIf"],[1,"py-4"],[1,"text-center"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3"],[1,"product","h-100"],[1,"fa-solid","fa-heart","text-danger","fa-2x","heart",3,"click"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"small"],[1,"h6","text-main"],[1,"d-flex","align-items-center","justify-content-between","small"],[1,"mb-0"],["class","fas fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"main-btn","w-100","py-2",3,"click"],["btnAdd",""],[1,"fas","fa-star"]],template:function(s,n){1&s&&t.YNc(0,T,5,1,"section",0),2&s&&t.Q6J("ngIf",n.products.length>0)},dependencies:[l.ez,l.sg,l.O5,l.H9,p.rH,v.r]}),a})()},6286:(C,h,i)=>{i.d(h,{N:()=>t});var l=i(5619),p=i(4769),v=i(9862);let t=(()=>{var _;class m{constructor(c){this._HttpClient=c,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new l.X(0)}addToCart(c){return this._HttpClient.post(this.baseUrl+"cart",{productId:c})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(c){return this._HttpClient.delete(this.baseUrl+`cart/${c}`)}updateCartCount(c,u){return this._HttpClient.put(this.baseUrl+`cart/${c}`,{count:u})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(c,u){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${c}?url=https://github.com/ahmed-menisy/fresh-live-route`,{shippingAddress:u})}}return(_=m).\u0275fac=function(c){return new(c||_)(p.LFG(v.eN))},_.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),m})()}}]);