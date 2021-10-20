import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students:Student[] = [];
  public totalStudent:number = 10;
  notifications =0;
  showSnipper =false;

  constructor(
    private commonService: CommonService,
    private httpclinet: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
  this.refreshData()
  }
  private refreshData() {
    this.httpclinet.getStudents().subscribe((data) => {
      console.log(data);
      this.students=data;
      this.commonService.setTotalStudent(data.length)
        console.log("s ",this.commonService.setTotalStudent);
      // this.name = data.name;
      // this.age = data.age;
      // this.sex = data.sex;
    });
    
    
  }
  load() {
    this.showSnipper =true;
    setTimeout(() => {
      
      this.showSnipper = false;
    },3000)}
  /**
   * addStudent
   */
  public addStudent() {
    this.router.navigate(['student-form'])
  }
  public deleteStudents(studentId: any) {
    console.log('student',studentId);
    this.httpclinet.deleteStudent(studentId).subscribe((response:any) => {
      console.log(response);
      setTimeout(() => { 
        this.load();
        this.refreshData();
       
        
      }, 1000);
      
     
    })
   
  
    

  }
   
}
