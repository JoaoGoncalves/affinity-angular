import { ResolveFn } from '@angular/router';
import { Employee } from '../../infrastructure/types/employee';
import { inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';

export const employeeDetailsResolver: ResolveFn<Employee> = (route) => {

  const employeeService = inject(EmployeeService);
  const id = +(route.paramMap.get('id') ?? 0);

  return employeeService.getEmployee(id);
};
