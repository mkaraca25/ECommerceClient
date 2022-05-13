import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialog } from './../base/base-dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.scss']
})
export class FileUploadDialogComponent extends BaseDialog<FileUploadDialogComponent> {
  constructor(dialogRef:MatDialogRef<FileUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:FileUpdateDialogState){
    super(dialogRef)
  }

}
export enum FileUpdateDialogState{
  Yes,
  No
}
