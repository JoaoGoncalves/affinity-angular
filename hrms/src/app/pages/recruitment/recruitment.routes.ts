import { Routes } from '@angular/router';
import { CandidateList } from './candidate-list';
import { CandidateDetails } from './candidate-details';
import { candidateDetailsResolver } from '../../shared/resolvers/candidate-details.resolver';



export const routes: Routes = [
    { path: '', redirectTo: 'candidates', pathMatch: 'full' },
    { path: 'candidates', pathMatch: 'full', component: CandidateList },
    { path: 'candidates/:id', component: CandidateDetails, resolve: { candidate: candidateDetailsResolver } },
];
