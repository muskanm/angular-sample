import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


const routes: Routes = [
  {path: "",pathMatch: "full",redirectTo:
"/home"},

  { path: "home",component: HomeComponent},
  { path: "student-create",component: StudentCreateComponent},
  { path: "student-list",component: StudentListComponent},
  { path: "student-details",component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
