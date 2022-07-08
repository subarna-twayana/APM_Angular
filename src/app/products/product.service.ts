import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    getProducts(): IProduct[] {
        return [
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
                "productId": 5,
                "productName": "Hammer",
                "productCode": "ASD-0003",
                "releaseDate": "July 198, 2022",
                "description": "rolling garden cart",
                "price": 78.98,
                "starRating": 4.8,
                "imageUrl": "assets/images/hammer.png" 
              },
              {
                "productId": 1,
                "productName": "Garden Cart",
                "productCode": "ASD-0123",
                "releaseDate": "March 15, 2022",
                "description": "rolling garden cart",
                "price": 34.98,
                "starRating": 4.2,
                "imageUrl": "assets/images/garden_cart.png" 
              }
                   
        ]
    }
}