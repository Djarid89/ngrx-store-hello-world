import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './heroes/components/create/create.component';
import { DetailsComponent } from './heroes/components/details/details.component';

const routes: Routes = [
  { path: 'home', component: CreateComponent },
  { path: 'details', component: DetailsComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
