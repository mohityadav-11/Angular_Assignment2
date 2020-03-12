import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: IEmployee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data : IEmployee[])=>{
      this.employees = data;
  })
  }
}
