import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from './../../../services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService,private httpClientService: HttpClientService) {
    super(spinner)
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService.get({
      controller:"products"
    }).subscribe(data=>console.log(data));
    /*this.httpClientService.get({
      baseUrl:"https://jsonplaceholder.typicode.com",
      controller:"posts"
    }).subscribe(data=>console.log(data));*/

    /*this.httpClientService.post({
      controller:"products"},
      {
        name:"Okul Çantası",
        stock:200,
        price:100
    }).subscribe();*/
    /*this.httpClientService.put({
      controller:"products",},{id:"36654eed-47b0-4a1a-b104-82495c350ad8",
      name: "Renkli Kareli Defter",
      stock:1500,
      price:5.5
    }).subscribe();*/

    /*this.httpClientService.delete({
      controller:"products"
    },  "8bcce3ff-f7aa-436d-ad62-a38617ab8ff2")
      .subscribe();*/
  }

}
