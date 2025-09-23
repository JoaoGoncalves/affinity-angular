import { Routes } from "@angular/router";
import { EmployeeList } from "./employee-list";
import { EmployeeDetails } from "./employee-details";
import { CreateEmployee } from "./create-employee";
import { EditEmployee } from "./edit-employee";
import { employeeDetailsResolver } from "../../shared/resolvers/employee-details-resolver";

export const routes : Routes = [
    {path: 'list', component: EmployeeList},
    {
        path: 'details/:id', 
        resolve: {employee: employeeDetailsResolver},
        component: EmployeeDetails,
    },
    {path: 'create', component: CreateEmployee},
    {path: 'edit', component: EditEmployee},
]