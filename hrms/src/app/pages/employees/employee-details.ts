import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../infrastructure/types/employee';
import { Truncate } from '../../shared/directives/truncate';

@Component({
  selector: 'app-employee-details',
  imports: [Truncate],
  template: `
    <section>
     <p>First Name: {{employee.firstName}}</p>
     <p>Last Name: {{employee.lastName}}</p>
     <p appTruncate [limit]="10">Position: {{employee.position}}</p>
     <p appTruncate>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magnam est a molestiae ab iure excepturi, at quam, nam tenetur cupiditate rem harum sapiente libero tempora blanditiis alias veritatis velit?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, cupiditate nihil, illo explicabo non qui nemo facilis ut tempora, quas et ullam eum quia soluta eius sunt! Sequi, optio laborum.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum commodi nulla incidunt sit non delectus ipsa quod, iure totam possimus, sed nesciunt quo fugit tempora! Repellendus possimus assumenda aut at.
     </p>
    </section>
  `,
  styles: ``
})
export class EmployeeDetails {
  employee = inject(ActivatedRoute).snapshot.data['employee'] as Employee;
}
