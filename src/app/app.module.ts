import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { EmployeeDetailsComponent }  from './employee-detail/employeeDetails.component';
import { EmployeesComponent } from './employees/employees.component';
import {EmployeeFilterPipe} from './employees/employee.filterpipe';
import {AddEmployeeComponent} from './employee-add/addEmployee.component';
import {EditEmployeeComponent} from './employee-edit/editEmployee.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, {dataEncapsulation: false},
    ),
    FormsModule
  ],
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
