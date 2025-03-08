import { Component } from '@angular/core';
import { Alumno } from '../courses/models';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { getRandomID } from '../../../shared/utils';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  displayedColumns: string[] = ['id', 'name', 'lastname', 'date', 'email', 'phone', 'actions'];

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

  constructor(private matDialog:MatDialog){}

  openDialog():void {

    this.matDialog.open(StudentDialogComponent)
    .beforeClosed()
    .subscribe({
      next:(value)=>{


        value ['id'] = getRandomID(5)

        this.dataSource = [...this.dataSource, value]
      }
    })
  }

  editCourse(editingAlum: Alumno) {
    this.matDialog.open(StudentDialogComponent, {data: editingAlum})
    .afterClosed()
    .subscribe({
      next:(value)=>{
        if(!!value){
          this.dataSource = this.dataSource.map((el)=>
          el.id === editingAlum.id ? {...value, id: editingAlum.id} : el)
        }
      }
    })
  }

  deleteCouseByID(id: string){
    if(confirm('estas seguro?')){

      this.dataSource = this.dataSource.filter((el)=>el.id != id);
    }
  }

}
