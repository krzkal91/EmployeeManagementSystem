import { Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {Title} from '@angular/platform-browser';
import {EmployeeService} from '../employee.service';


@Component({
    selector: 'app-add-employee',
    styleUrls: ['./addEmployee.component.css'],
    templateUrl: './addEmployee.component.html'
})

export class AddEmployeeComponent implements OnInit {
    employee: Employee;
    newEmpID: number;
    title = 'Add Employee';
    locationList: string[] =  ['Bangalore', 'Chennai', 'Pune', 'Hyderabad'];
    submitted = false;
    employeeService: EmployeeService;
    employees: Employee[];

    constructor(private titleSer: Title, employeeService: EmployeeService ) {
        this.titleSer.setTitle(this.title);
        this.employeeService = employeeService;
    }


    ngOnInit(): void {
        this.employee = new Employee();
        this.employee.name = '';
        this.employee.location = '';
        this.employee.mobile = '';
        this.employee.email = '';
        this.submitted = false;
        this.employeeService.getEmployees()
            .subscribe(employees => this.employees = employees);
        this.newEmpID = this.getNewID();
    }

    public newEmployee() {
        this.employee.id = this.newEmpID;
        this.employeeService.addEmployee(this.employee as Employee)
            .subscribe(employee => {this.employees.push(employee); });
    }

    public onSubmit() {
        this.submitted = true;
    }

    public getNewID(): number {
    return this.employees.length + 1;
    }
}
