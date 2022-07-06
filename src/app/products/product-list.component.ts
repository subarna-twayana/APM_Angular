import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.Component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean =false;
    listFilter: string = 'cart';
    products: any[] =[
        {
          "productId": 1,
          "productName": "Garden Cart",
          "productCode": "ASD-0123",
          "releaseDate": "March 15, 2022",
          "description": "rolling garden cart",
          "price": 34.98,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png" 
        },
        {
          "productId": 2,
          "productName": "Hammer",
          "productCode": "ASD-0003",
          "releaseDate": "July 198, 2022",
          "description": "rolling garden cart",
          "price": 78.98,
          "starRating": 4.8,
          "imageUrl": "assets/images/hammer.png" 
        }
    ];

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

}