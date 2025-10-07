import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CandidateService } from '../../services/candidate.service';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgFor, AsyncPipe],
template: `
    <h2>Candidates list</h2>
    <table>
      <caption>Search: <input [formControl]="searchControl"/></caption>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let candidate of candidates$ | async">
          <td>
            <a [routerLink]="[candidate.id]">{{ candidate.firstName }} {{ candidate.lastName }}</a>
          </td>
          <td>{{ candidate.email }}</td>
          <td>{{ candidate.position }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: ``
})
export class CandidateList implements OnDestroy,OnInit {
  
  private readonly candidateService = inject(CandidateService);
  candidates$ = this.candidateService.getCandidates();
  destroy$ = new Subject<void>();

  searchControl = new FormControl('');

  search$ = this.searchControl.valueChanges.pipe(
    debounceTime(500),
    takeUntil(this.destroy$)
  );

  ngOnInit(): void {
    this.search$.subscribe((value) => {
      if (value) {
        this.candidates$ = this.candidateService.getCandidatesByName(value);
      } else {
        this.candidates$ = this.candidateService.getCandidates();
      }
    });
  }


  ngOnDestroy(): void {
    this.destroy$.next();
  }



}
