import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project-service';
import { ProjectCard } from "../../shared/components/project-card";
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCard, AsyncPipe, NgFor],
  template: `
    <section>
      <app-project-card *ngFor="let project of projects$ | async" [projectId]="project.id"></app-project-card>
    </section>
  `,
  styles: ``
})
export class ProjectList {
  private readonly projectService = inject(ProjectService);
  projects$ = this.projectService.getProjects();
}
