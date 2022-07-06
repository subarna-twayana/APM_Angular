import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.Component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  ngOnInit(): void {
    this.listFilter = 'cart';
    console.log ("Method not implemented.");
  }
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean =false;
    // listFilter: string = 'cart';

    private _listFilter: string = '';
    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string){
      this._listFilter = value;
      console.log('in setter:', value);
      this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[] =[
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

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

}