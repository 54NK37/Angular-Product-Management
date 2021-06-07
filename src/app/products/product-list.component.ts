import { ProductService } from './products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Subscription } from 'rxjs';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  pageTitle: string = "Product List"
  hideImage: boolean = false
  filteredProducts: IProduct[];
  _filterBy: string;
  products: IProduct[]
  productSubscription = new Subscription()
  errorMessage: string

  
    constructor(private productService: ProductService) {
      this.filteredProducts = this.products
    }

  set filterBy(value: string) {
    this._filterBy = value
    this.filteredProducts = value.length > 0 ? (this.products.filter((product) => {
      return product.productName.toLowerCase().includes(value)
    })) : this.products
  }



  toggleImage(): void {
    this.hideImage = !this.hideImage
    // console.log(this.hideImage);
  }

  ngOnInit(): void {
    console.log("Onint called");
    this.productSubscription= this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err =>{
        this.errorMessage=err
        console.log(this.errorMessage);
      }
    })
  }

  starClicked(data: string) {
    this.pageTitle = 'Product List : ' + data
  }

  ngOnDestroy(): void {
this.productSubscription.unsubscribe()
  }
}