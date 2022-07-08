import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.Component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit{
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    // this.listFilter = 'cart';
    // console.log ("Method not implemented.");
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
    products: IProduct[] =[];
  constructor(private productService: ProductService){

  }
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

}