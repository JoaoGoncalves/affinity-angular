import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { AsyncPipe, NgComponentOutlet, NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor, AsyncPipe, NgComponentOutlet],
template: `
    <h2>Employee List</h2>
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let employee of employees$ | async">
          <td> {{employee.firstName}} - {{employee.lastName}}</td>
          <td> {{employee.position}}</td>
          <td>
            <button (click)="showConfirmationDialog()">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <ng-container *ngComponentOutlet="confirmDialog">  </ng-container>
  `,
  styles: ``
})
export class EmployeeList {
  employeeService = inject(EmployeeService);
  employees$ =  this.employeeService.getEmployees();

  isConfirmationOpen = true;
  confirmDialog: any;

  async showConfirmationDialog (){
    const { ConfirmationDialog } =  await import('../../shared/components/confirmation-dialog');
    this.confirmDialog = ConfirmationDialog;
  }

}
