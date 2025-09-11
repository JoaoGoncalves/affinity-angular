import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [],
  template: `
    <dialog [open]="isConfirmationOpen">
        Are you sure? 
        <button (click)="isConfirmationOpen = false">Cancel</button>
        <button (click)="isConfirmationOpen = false">Confirm</button>
    </dialog>
  `,
  styles: ``
})
export class ConfirmationDialog {
  @Input() isConfirmationOpen = true;
}
