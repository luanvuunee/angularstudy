import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  //public name = new FormControl('');
  public opened: boolean | undefined;

  public  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  
  constructor() { }

  ngOnInit(): void {
    
    
  }
  updateName() {
    //this.name.setValue('Thao Uyen');
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
