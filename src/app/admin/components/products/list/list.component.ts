import { List_Product } from './../../../../contracts/list_product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/services/common/models/product.service';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit  {

  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertifyService: AlertifyService)
   { super(spinner)}

  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate','updatedDate'];
  dataSource :MatTableDataSource<List_Product>=null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts() {
    this.showSpinner(SpinnerType.BallAtom);
    const allProducts: 
    { totalCount: number; products: List_Product[] } 
    = await this.productService.read(this.paginator ?
       this.paginator.pageIndex : 0, this.paginator ?
        this.paginator.pageSize : 5, () => this.hideSpinner(SpinnerType.BallAtom), 
        errorMessage => this.alertifyService.message(errorMessage, {
      dismissOthers: true,
      messageType: MessageType.Error,
      position: Position.TopRight
    }))
    this.dataSource = new MatTableDataSource<List_Product>(allProducts.products);
    this.paginator.length = allProducts.totalCount;
  }
  debugger;
  async pageChanged() {
    await this.getProducts();
  }
  ngOnInit(): void {
    
  }

}
