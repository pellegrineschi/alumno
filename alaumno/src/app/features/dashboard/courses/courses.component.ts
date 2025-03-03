import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  nombreCurso = ""

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
