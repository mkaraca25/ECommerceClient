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
  /*constructor(private toastrService:CustomToastrService) {
    toastrService.message("Full Stack Developer","Melik KARACA",{messageType:ToastrMessageType.Info,
    position:ToastrPosition.TopCenter});
    toastrService.message("Data Scientist","Melik KARACA",{messageType:ToastrMessageType.Success,
      position:ToastrPosition.TopLeft});
    toastrService.message("Computer Engineer","Melik KARACA",{messageType:ToastrMessageType.Warning,
      position:ToastrPosition.BottomFullWidth});
    toastrService.message("Software Developer","Melik KARACA",{messageType:ToastrMessageType.Error,
      position:ToastrPosition.TopRight});
  }*/
}
/*$(document).ready(()=>{
  alert("Full Stack Developer Melik KARACA")
})*/