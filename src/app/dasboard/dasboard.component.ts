import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, interval, } from 'rxjs';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  public updateSubscription?: Subscription;
  public students:Student[] = [];
  public totalStudent:number = 10;
  notifications =0;
  showSnipper =false;
  isLoading = true;
  
  constructor(
    private commonService: CommonService,
    private httpclinet: HttpClientService,
    private router: Router,
    private route: ActivatedRoute,
    ) 
    { }

  ngOnInit(): void {
    
   this.refreshData() 
  console.log();
  

    }
  
  private refreshData() {
    try {
      this.httpclinet.getStudents().subscribe((data) => {
      // console.log(data);
      this.students=data;
      
      this.updateSubscription = interval(10000).subscribe(
        (val) => { this.refreshData(),
          console.log('reload');
          
      }

  );

     
    });
    
      
    }catch (error) {
      console.log('ss',error);
      
      
    }
    
    
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
  public addStudentDriven() {
    this.router.navigate(['form-driven']);
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
