import { MessageType, Position } from './../../../../services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from './../../../../base/base.component';
import { Create_Product } from './../../../../contracts/create_product';

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/common/models/product.service';
import { AlertifyService } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spiner:NgxSpinnerService, private productService:ProductService,private alertify:
    AlertifyService ) {
    super(spiner)
   }

  ngOnInit(): void {
  }

  create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){
    this.showSpinner(SpinnerType.BallAtom);
    const create_Product :Create_Product=new Create_Product();
    create_Product.name=name.value;
    create_Product.stock=parseInt(stock.value);
    create_Product.price=parseFloat(price.value);

    this.productService.create(create_Product,()=>{
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertify.message("Ürün başarıyla eklenmiştir.",{
        dismissOthers:true,
        messageType:MessageType.Success,
        position:Position.TopRight
      });
    });
  }

}
