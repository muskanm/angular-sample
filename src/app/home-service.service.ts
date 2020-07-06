import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  students = [
    {id:101,name:"Alex",description: "Alex Details",email:"alex@xyz.com"},
    {id:201,name:"Anna",description:"Anna Details",email:"ana@xyz.com"},
    {id:301,name:"Sara",description:"Sara Details",email:"sara@xyz.com"}
  ]

  constructor() { }
  public getStudents():Array<{id,name,description,email}>{
    return this.students;
  }
    public createStudents(students:{id,name,description,email}){
      this.students.push(students);
    
    
  }
}
