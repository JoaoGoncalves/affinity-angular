import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../infrastructure/types/employee';

@Component({
  selector: 'app-employee-details',
  imports: [],
  template: `
    <section>
     <p>First Name: {{employee.firstName}}</p>
     <p>Last Name: {{employee.lastName}}</p>
     <p>Position: {{employee.position}}</p>
    </section>
  `,
  styles: ``
})
export class EmployeeDetails {
  employee = inject(ActivatedRoute).snapshot.data['employee'] as Employee;
}
