import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Project } from '../infrastructure/types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly http = inject(HttpClient);

  getProjects(){
    return this.http.get<Project[]>(`https://my-json-server.typicode.com/JoaoGoncalves/hrms-api/projects`)
  }

  getProject(id : number){
    return this.http.get<Project>(`https://my-json-server.typicode.com/JoaoGoncalves/hrms-api/projects/${id}`)
  }
}


