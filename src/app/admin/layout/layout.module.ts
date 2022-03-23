import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,MatSidenavModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
