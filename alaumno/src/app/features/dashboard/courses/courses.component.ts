import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { Course } from './models';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  nombreCurso = "";

  displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate'];
  dataSource: Course[] = [

    {
      id:'1',
      name: 'angular',
      startDate: new Date,
      endDate: new Date(),
    },
    {
      id:'2',
      name: 'js',
      startDate: new Date,
      endDate: new Date(),
    },
    {
      id:'3',
      name: 'photoshop',
      startDate: new Date,
      endDate: new Date(),
    }
  ]

  constructor(private matDialog: MatDialog){}

  openDialog():void {

    this.matDialog.open(CourseDialogComponent)
    .beforeClosed()
    .subscribe({
      next:(value)=>{
        this.nombreCurso = value.name;
      }
    })
  }

}
