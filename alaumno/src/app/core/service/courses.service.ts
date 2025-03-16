import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../../features/dashboard/courses/models";

@Injectable({providedIn: 'root'})
export class CoursesService{

  getCourses(): Observable<Course[]>{

    return new Observable((observer)=>{
      setTimeout(() => {

        observer.next([
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
        ])
        observer.complete

      }, 1500);
    })
  }
}

