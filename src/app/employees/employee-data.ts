import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IEmployee } from './IEmployee';


export class EmployeeData implements InMemoryDbService {

  createDb() {
    const empolyees: IEmployee[] = [
      {
        id: 1,
        eName: 'will Smith',
        eAge: 51,
        eSalary: 51000,
        eGender: 'Male',
        eEmail: 'willsmith51@gmail.com',
        eContact: 9936442787,
        eAddress: `Willard Carroll Smith Jr.,
        Philadelphia, Pennsylvania,
        United States of America.`
      },
      {
        id: 2,
        eName: 'Chris Hemsworth',
        eAge: 36,
        eSalary: 36000,
        eGender: 'Male',
        eEmail: 'chrishemsworth36@gmail.com',
        eContact: 9936442787,
        eAddress: `Phillip Island,
        Victoria,
        Australia.`
      },
      {
        id: 3,
        eName: 'Robert Downey Jr.',
        eAge: 54,
        eSalary: 54000,
        eGender: 'Male',
        eEmail: 'Rdj54@gmail.com',
        eContact: 9936442787,
        eAddress: `Robert Downey Jr.
        The Spanky Taylor Company 916 West Burbank Blvd.
        Suite #206C Burbank,
        CA 91506 USA`
      },
      {
        id: 4,
        eName: 'Katherine Langford',
        eAge: 23,
        eSalary: 23000,
        eGender: 'Female',
        eEmail: 'katherinelangford23@gmail.com',
        eContact: 9936442787,
        eAddress: `Katherine Langford
        William Morris Endeavor Entertainment
        9601 Wilshire Blvd.
        3rd Floor Beverly Hills,
        CA 90210-5213 USA`
      },
      {
        id: 5,
        eName: 'Camila Cabello',
        eAge: 23,
        eSalary: 23000,
        eGender: 'Female',
        eEmail: 'camilacabello23@gmail.com',
        eContact: 9936442787,
        eAddress: `Camila Cabello
        William Morris Endeavor Entertainment
        9601 Wilshire Blvd.
        3rd Floor Beverly Hills, CA 90210-5213 USA`
      }
    ];
    return { empolyees };
  }
}
