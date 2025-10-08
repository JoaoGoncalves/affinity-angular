import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PermissionService } from '../../services/permissions-service';
import { EmployeeForm } from '../../infrastructure/types/employee-form';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div>
      <h1>Edit</h1>
      <form [formGroup]="form">
        <input type="text" placeholder="firstName" formControlName="firstName" />
        <input type="text" placeholder="lastName" formControlName="lastName" />
        <input type="text" placeholder="Email" formControlName="email" />
        <input type="text" placeholder="position" formControlName="position" />
        <input type="text" placeholder="level" formControlName="level" />

        <button type="submit">save</button>
      </form>
    </div>
  `,
  styles: ``,
})
export class EditEmployee implements OnInit {
  permissionService = inject(PermissionService);

  destroyRef = inject(DestroyRef);

  form = new FormGroup<EmployeeForm>({
    firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    position: new FormControl('', { nonNullable: true }),
    level: new FormControl('', { nonNullable: true }),
  });

  /* constructor(){
    this.permissionService.hasPermission('EditEmployeePrivateDetails').pipe(
      takeUntilDestroyed(),
      ).subscribe( (hasPermission) => {
        if(!hasPermission) {
          this.form.controls.firstName.disable();
          this.form.controls.lastName.disable();
          this.form.controls.email.disable();
          } else {
            this.form.controls.firstName.enable();
          this.form.controls.lastName.enable();
          this.form.controls.email.enable();
          }
          })
          } */

    ngOnInit(): void {
      this.permissionService
        .hasPermission('EditEmployeePrivateDetails')
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((hasPermission) => {
          if (!hasPermission) {
            this.form.controls.firstName.disable();
            this.form.controls.lastName.disable();
            this.form.controls.email.disable();
          } else {
            this.form.controls.firstName.enable();
            this.form.controls.lastName.enable();
            this.form.controls.email.enable();
          }
        });
    }
}
