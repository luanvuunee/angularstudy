import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
 
  public id= 0;
  results = {}
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
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
  this.id = Number(this.route.snapshot.paramMap.get('id'));
  if(this.id >0){
    this.loadData(this.id);
  }
  }
  private loadData(id:any) {
    this.httpclinet.getStudent(id).subscribe((data)=>{
      console.log('Student Data', data);
      for(const controlName in this.studentForm.controls){
        if(controlName){
          this.studentForm.controls[controlName].setValue(data[controlName]);
        }
      }
    })
  }
  /**
   * saveData
   */
  public createNewData() {
    const newStudent:any = {};
    for(const controlName in this.studentForm.controls){
      if(controlName){
        newStudent[controlName] = this.studentForm.controls[controlName].value;
      }
    }
    return newStudent as Student
  }
 
  public saveandReturnStudent() {
      this.id > 0 ? 
      this.httpclinet.modifyStudent(this.id,this.createNewData()).subscribe((newdata) => {
      }): 
      this.httpclinet.postNewStudents(this.createNewData()).subscribe((newdata) => {
      
      })
      this.Confirm();
      
      
    
  }
  public saveandaddnewStudent() {
      this.id > 0 ? this.httpclinet.modifyStudent(this.id,this.createNewData()).subscribe((newdata) => {
      })
      : 
      this.httpclinet.postNewStudents(this.createNewData()).subscribe((newdata) => {
        this.commonService.increamentStudent();
        this.studentForm.reset();
      })

    }
    /**
     * Confirm
     */
    public Confirm() { 
      var userPreference;

    if (confirm("Do you want to save changes?") == true) {
       userPreference = "Data saved successfully!";
    this.router.navigate(['students'])
    } else {
        userPreference = "Save Cancelled!";
      }
      
    }
    /**
     * randomStudent
     */
    public randomStudent() {
      
     this.httpclinet.getRandomStudent().subscribe((data) =>{  
       console.log(); 
       

       try {
        if(data && data.results && data.results.length >0){
          const student = data.results[0];
          this.studentForm.controls.code.setValue(
            (student.id.name||'')+'VN'+(student.id.value||'')
          );
          this.studentForm.controls.gender.setValue(student.gender)
          this.studentForm.controls.firstName.setValue(student.name.first)
          this.studentForm.controls.lastName.setValue(student.name.last)
          this.studentForm.controls.email.setValue(student.email)
          this.studentForm.controls.phone.setValue(student.phone)
          this.studentForm.controls.picture.setValue(student.picture.large)
        }
        window.alert("Get Successfully");

         
       } catch (error) {
         
       }
       
       
     })
    }
  }
  
