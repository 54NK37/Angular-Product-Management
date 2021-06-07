import { IProduct } from './product';
import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn:'root'
})
export class ProductService{
    
private productUrl:string='api/products/products.json'
constructor(private http:HttpClient){}

getProducts():Observable<IProduct[]>{
return this.http.get<IProduct[]>(this.productUrl).pipe(
  tap(data=>console.log('All:'+JSON.stringify(data))),
  catchError(err=>throwError(err))
)
}

}