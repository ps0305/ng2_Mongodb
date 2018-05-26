import {Component} from "@angular/core";
import {MongoService} from "../service/mongo.service";
@Component({
    selector:"service-seven",
    templateUrl:"./mongo.component.html"
})
export class MongoComponent{
    private _result:any;
    constructor(private _service:MongoService){

    }
    ngOnInit(){
        this._service.getProducts().subscribe( res=>this._result=res,
                                               err=>console.log(err));
    }
}