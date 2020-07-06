import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IStudent } from './student';

import { catchError } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';



@Injectable()
export class StudentService {
 private _url:string = "/assets/data/students.json";
  constructor(private http:HttpClient) { }
  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url)
                    .pipe(catchError(this.errorHandler));                
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message||"Server Error");
    
  }
  
}
