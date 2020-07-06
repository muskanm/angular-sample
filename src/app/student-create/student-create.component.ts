import { Component, OnInit,} from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-create',
  template:`
  <h2>Student List</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor = "let stu of students">
  <li>{{stu.name}}</li>
  </ul>
 
        ` ,
   styles: []
})
export class StudentCreateComponent implements OnInit {
 
public students = [];
public errorMsg;

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this._studentService.getStudents()
        .subscribe(data=>this.students = data,
                   error =>this.errorMsg = error);
  }


}
