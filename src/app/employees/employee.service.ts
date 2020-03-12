import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'app/empolyees';

  constructor(private httpClient: HttpClient) { }

  public getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.employeesUrl)
  }

  public getEmployeeById(employeeId): Observable<any>{
    if(employeeId === 0){
      return of(this.initializeProduct());
    }
      return this.httpClient.get(`${this.employeesUrl}/${employeeId}`);
  }

  private initializeProduct(): IEmployee {
    // Return an initialized object
    return {
      id: 0,
      eName: null,
      eAge: null,
      eGender: null,
      eEmail: null,
      eAddress: null,
      eSalary: null,
      eContact: null,
    };
  }

  public createEmployee(employee:IEmployee){
    return this.httpClient.post(`${this.employeesUrl}`, employee)
  }

  public deleteEmployee(employee){
    return this.httpClient.delete(`${this.employeesUrl}/${employee}`)
  }

  public updateEmployee(emp: IEmployee){
    return this.httpClient.put(`${this.employeesUrl}/${emp.id}`, emp)
}
}
