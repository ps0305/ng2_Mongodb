import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
@Injectable()
export class MongoService{
   constructor(private _http:Http){

   } 
   public getProducts():any{
       return this._http.get("http://localhost:8080/products")
            .map((res:Response)=>{
                return res.json();
            }).catch(this._handleError);
   }
   public _handleError(error){
       console.error("Error Raised...!"+error);
       return Observable.throw(error || "Internal Server Error...!");
   }
}