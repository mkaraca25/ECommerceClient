import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
constructor(private spinner:NgxSpinnerService) {}
  showSpinner(spinnerNameType: SpinnerType){
    this.spinner.show(spinnerNameType)
    setTimeout(()=>this.hideSpinner(spinnerNameType),2000)
  }
  hideSpinner(spinnerNameType: SpinnerType){
    this.spinner.hide(spinnerNameType);
    
  }
}
export enum SpinnerType{
  BallAtom="s1",
  BallScaleMultiple="s2",
  BallSpinClockwiseFadeRotating="s3",
  Pacman="s4",
  LineSpinFadeRotating="s5",
  BallClipRotateMultiple="s6",
  SquareLoader="s7"
}
