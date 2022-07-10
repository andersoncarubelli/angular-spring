import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(private service: CoursesService, private _snackBar: MatSnackBar) {
    this.courses$ = this.service.list().pipe(
      catchError((error) => {
        //console.log(error);
        this._snackBar.open('Houve um problema ao carregar os dados', 'ok');
        return of([]);
      })
    );
  }

  ngOnInit(): void {}
}
