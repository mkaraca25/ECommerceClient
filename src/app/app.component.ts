import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastrService:CustomToastrService) {
    /*toastrService.message("Hello","Melik",{messageType:ToastrMessageType.Info,
    position:ToastrPosition.TopCenter});
    toastrService.message("Hello","Melik",{messageType:ToastrMessageType.Success,
      position:ToastrPosition.TopLeft});
    toastrService.message("Hello","Melik",{messageType:ToastrMessageType.Warning,
      position:ToastrPosition.BottomFullWidth});
    toastrService.message("Hello","Melik",{messageType:ToastrMessageType.Error,
      position:ToastrPosition.TopRight});*/
  }
}
/*$(document).ready(()=>{
  alert("Full Stack Developer Melik KARACA")
})*/