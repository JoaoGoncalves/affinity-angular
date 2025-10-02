import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProjectService } from '../../services/project-service';
import { Observable } from 'rxjs';
import { Project } from '../../infrastructure/types/project';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgIf, AsyncPipe],
template: `
    <article *ngIf=" project$ | async as project">
      <img [src]="project.image" width="200">
      <h3>{{project.name}}</h3>
      <hr>
    </article>
  `,
  styles: ``
})
export class ProjectCard implements OnChanges {
  private readonly projectService = inject(ProjectService);

  
  @Input({required: true}) projectId!: number ;
  project$! : Observable<Project>; 

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['projectId']){
      this.project$ = this.projectService.getProject(this.projectId);
    }
  }
}
