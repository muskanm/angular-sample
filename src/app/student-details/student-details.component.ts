import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  template: `
  <h2>Student Details</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor = "let st of students">
  <li>{{st.id}}.{{st.name}}-{{st.age}}</li>
  </ul>
  `,
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
 public students = [];
 public errorMsg;
  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
     this._studentService.getStudents()
         .subscribe(data=> this.students = data,
                     error=>this.errorMsg = error
                     
                      );
  }

}
