import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute,
    ) 
    { }

  ngOnInit(): void {
    



  this.refreshData();
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
    this.router.navigate(['student-form',0]);
  }
  public deleteStudents(studentId: any) {
    var userPreference;
  if (confirm("Do you want to save changes?") == true) {
    
     this.httpclinet.deleteStudent(studentId).subscribe((response:any) => {
      this.refreshData();
      userPreference = "Data saved successfully!";
    })
    

  } else {
      userPreference = "Save Cancelled!";
    }
    
   
    
  }
  /**
   * editStudent
   */
  public editStudent(studentId: any) {
    this.router.navigate(['student-form',studentId])
    
    
  }

  
   
}
