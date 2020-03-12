import {  NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
imports: [
  RouterModule.forRoot([
    { path: 'addemployee/:id/add', component: AddEmployeeComponent },
    { path: 'employees', component: EmployeesListComponent },
    { path: '', pathMatch: 'full', redirectTo: 'employees' },
    { path: '**', component: EmployeesListComponent }
  ])
],
exports: [
  RouterModule
]
})

export class AppRoutingModule { }
