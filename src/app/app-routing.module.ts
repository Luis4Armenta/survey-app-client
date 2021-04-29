import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { NewFormComponent } from './new-form/new-form.component';
import { BoardComponent } from './pages/board/board.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'create-user', component: CreateUserComponent, canActivate: [AuthGuard] },
  { path: 'new-form', component: NewFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'board', component: BoardComponent },
  { path: '**', redirectTo: 'board' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
