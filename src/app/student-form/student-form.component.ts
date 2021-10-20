import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  
  public  studentForm = new FormGroup({
    code: new FormControl(''),
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    picture: new FormControl(''),
  });

  constructor(
    private commonService: CommonService,
    private httpclinet: HttpClientService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }
  public onSubmit() {
    console.log('onSubmit');
    const newStudent:any = {};
    for(const controlName in this.studentForm.controls){
      if(controlName){
        newStudent[controlName] = this.studentForm.controls[controlName].value;
      }
    }
   
    try {
      this.httpclinet.postNewStudents(newStudent).subscribe(newdata => {
        console.log(newStudent);
        this.commonService.setTotalStudent(newStudent.length)
        console.log("s ="+this.commonService.setTotalStudent);
        
       
      })
    } catch (error) {
      
      
    }
    
    setTimeout( () => {this.router.navigate(['students'])},3000);
    
    
    
    // TODO: Use EventEmitter with form value
    //console.warn(this.studentForm.value);
  }
}
