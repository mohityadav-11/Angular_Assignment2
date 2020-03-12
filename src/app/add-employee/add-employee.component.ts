import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../employees/IEmployee';
import { EmployeeService } from '../employees/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  id: number;
  employee: IEmployee;
  male:Boolean;
  female:Boolean;

  constructor(private route:ActivatedRoute,
          private router: Router,
          private employeeData: EmployeeService) { }

  deleteEmp(): void {
    if (this.employee.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.employee.eName} was deleted`);
      } else {
        if (confirm(`Really delete the product: ${this.employee.eName}?`)) {
          this.employeeData.deleteEmployee(this.employee.id).subscribe({
            next: () => this.onSaveComplete(`${this.employee.eName} was deleted`)});
        }
    }
  }


  saveEmp(): void {

      if (this.employee.id === 0) {
        this.employeeData.createEmployee(this.employee).subscribe({
          next: () => this.onSaveComplete(`The new ${this.employee.eName} was saved`),
        });
      } else {
        this.employeeData.updateEmployee(this.employee).subscribe({
          next: () => this.onSaveComplete(`The updated ${this.employee.eName} was saved`),
        });
      }

  }



  onSaveComplete(message?: string): void {
    // Navigate back to the product list
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.employeeData.getEmployeeById(this.id).subscribe((data : IEmployee)=>{
      this.employee = data;
  });
  if(this.employee.eGender==='Male'){
    this.male= true;
    this.female= false
  }else if(this.employee.eGender==='Female'){
    this.male= false;
    this.female= true;
  }else{
    this.male= false;
    this.female= false;
  }
  }
}

