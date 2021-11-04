import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-form-student-driven',
  templateUrl: './form-student-driven.component.html',
  styleUrls: ['./form-student-driven.component.scss']
})
export class FormStudentDrivenComponent implements OnInit {

  constructor( private commonService: CommonService,
    private httpclinet: HttpClientService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    
  }
  
 public onSubmit(form: NgForm){
   const student:Student ={
     id: form.value.id,
     code: form.value.code,
     firstName: form.value.firstName,
     lastName: form.value.lastName,
     gender: form.value.gender,
     email: form.value.email,
     phone: form.value.phone,
   }
   this.httpclinet.postNewStudents(student).subscribe((data)=>{
   })
   this.Confirm();
   
    
  }
  public Confirm() {
    var userPreference;

  if (confirm("Do you want to save changes?") == true) {
     userPreference = "Data saved successfully!";
  this.router.navigate(['dashboard'])
  } else {
      userPreference = "Save Cancelled!";
    }
    
  }
  
 }
 
