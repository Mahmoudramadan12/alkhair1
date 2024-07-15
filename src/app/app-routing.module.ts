import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomepageComponent },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
