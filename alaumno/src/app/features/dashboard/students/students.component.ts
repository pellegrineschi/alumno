import { Component } from '@angular/core';
import { Alumno } from '../courses/models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  displayedColumns: string[] = ['id', 'name', 'lastname', 'date', 'email', 'phone'];

  dataSource: Alumno[] = [
    {
      id: '1',
      name: 'tobias',
      lastname: 'pellegrineschi',
      date: new Date(),
      email: 'pellegrineschi09@gmail.com',
      phone: '1123912658'

    },
    {
      id: '2',
      name: 'bautista',
      lastname: 'pellegrineschi',
      date: new Date(),
      email: 'pellegrineschi10@gmail.com',
      phone: '1123912655'

    },
    {
      id: '3',
      name: 'yamila',
      lastname: 'pellegrineschi',
      date: new Date(),
      email: 'pellegrineschi@gmail.com',
      phone: '1123915127'

    },
  ]

}
