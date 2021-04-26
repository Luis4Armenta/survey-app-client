import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewFormComponent } from './new-form/new-form.component';
import { BoardComponent } from './pages/board/board.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

const routes: Routes = [
  { path: 'create-user', component: CreateUserComponent },
  { path: 'new-form', component: NewFormComponent },
  { path: '**', component: BoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
