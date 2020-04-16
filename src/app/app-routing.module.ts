import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent }  from './employee-detail/employeeDetails.component';
import {EmployeesComponent} from './employees/employees.component';
import {AddEmployeeComponent} from './employee-add/addEmployee.component';
import {EditEmployeeComponent} from './employee-edit/editEmployee.component';

const routes: Routes = [
  { path: 'detail/:id', component: EmployeeDetailsComponent },
  { path: 'employeeList', component: EmployeesComponent },
  { path: 'editEmployee/:id', component: EditEmployeeComponent},
  { path: 'addEmployee', component: AddEmployeeComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
