import { DialogService } from './../../services/common/dialog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertifyService, MessageType, Position } from './../../services/admin/alertify.service';
import { DeleteDialogComponent, DeleteState } from './../../dialogs/delete-dialog/delete-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from './../../base/base.component';
import { HttpClientService } from './../../services/common/http-client.service';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { ProductService } from 'src/app/services/common/models/product.service';
import { MatDialog } from '@angular/material/dialog';

declare var $:any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element:ElementRef,private _renderer:Renderer2,
    private httpClientService:HttpClientService,private spinner:NgxSpinnerService,
    public dialog: MatDialog,private alertifyService:AlertifyService,
    private dialogService : DialogService) { 
      
      const img=_renderer.createElement("img");
      img.setAttribute("src","../../../../../assets/delete.png")
      img.setAttribute("style","cursor: pointer")
      img.width=25;
      img.heiht=25;
      img.align="right";
      _renderer.appendChild(element.nativeElement,img)
    }
    @Input() id: string;
    @Input() controller :string;
    @Output() callback: EventEmitter<any>=new EventEmitter();
    @HostListener("click")
    async onclick(){
      this.dialogService.openDialog({
        componentType:DeleteDialogComponent,
        data:DeleteState.Yes,
        afterClosed : async ()=>{
          this.spinner.show(SpinnerType.BallAtom)
          const td:HTMLTableCellElement=this.element.nativeElement;
          //await this.productService.delete(this.id);
          this.httpClientService.delete({
            controller:this.controller
          },this.id).subscribe(data=>{
            $(td.parentElement).animate({
              opacity:0,
              left:"+=50",
              height:"toogle"
            },900,()=>{
              this.callback.emit();
              this.alertifyService.message("Ürün başarıyla silinmiştir.",{
                dismissOthers:true,
                messageType:MessageType.Success,
                position:Position.TopRight
              });
            });
            },(errResponse:HttpErrorResponse)=>{
              this.spinner.hide(SpinnerType.BallAtom)
              this.alertifyService.message("Ürün silinirken beklenmedik bir hata ile karşılaştı.",{
              dismissOthers:true,
              messageType:MessageType.Error,
              position:Position.TopRight
              })
            });
      }
  })
}
    
    
    /*openDialog(afterClosed: any): void {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '250px',
        data: DeleteState.Yes,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result==DeleteState.Yes){
          afterClosed();
        }
      });
    }*/

}

