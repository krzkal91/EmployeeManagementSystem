import { Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {Title} from '@angular/platform-browser';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-edit-employee',
    styleUrls: ['./editEmployee.component.css'],
    templateUrl: './editEmployee.component.html'
})

export class EditEmployeeComponent implements OnInit {
    employee: Employee;
    title = 'Edit Employee';
    locationList: string[] =  ['Bangalore', 'Chennai', 'Pune', 'Hyderabad'];
    submitted = false;
    employeeService: EmployeeService;
    employees: Employee[];

    constructor(private titleSer: Title, employeeService: EmployeeService, private route: ActivatedRoute) {
        this.titleSer.setTitle(this.title);
        this.employeeService = employeeService;
    }


    ngOnInit(): void {
        this.submitted = false;
        this.getEmployee();
        this.employeeService.getEmployees()
            .subscribe(employees => this.employees = employees);
    }

    getEmployee(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.employeeService.getEmployee(id)
            .subscribe(empl => this.employee = empl);
    }

    public updateEmployee() {
        this.employeeService.updateEmployee(this.employee as Employee)
            .subscribe(employee => {this.employees.push(employee); });
    }

    public onSubmit() {
        this.submitted = true;
    }

}
