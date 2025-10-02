import { Routes } from "@angular/router";
import { ProjectList } from "./project-list";
import { ProjectDetails } from "./project-details";

export const routes : Routes = [
    {path: 'projects', pathMatch: 'full', component: ProjectList},
    {path: 'projects/:id', component: ProjectDetails},
]