import { ProductService } from './../products.service';
import { IProduct } from './../product';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = "Product List"
  productId: number;
  product: IProduct;
  private productSubscription = new Subscription()

  //get param from url
  constructor(private route: ActivatedRoute, 
    private productSevice: ProductService,
    private router : Router) {
  }
  ngOnDestroy(): void {
    this.productSubscription.unsubscribe()
  }
  
  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')
    this.productSubscription = this.productSevice.getProducts().subscribe({
      next: data => {
        this.product = data.find(x => x.productId === this.productId)
        console.log(this.product);
      }
    })
  }

  onBack(){
    // navigate with code incase if we want to do some action before performing 
    // routing
    this.router.navigate(['/products'])
  }
}
