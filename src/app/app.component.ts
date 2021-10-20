import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CommonService } from './Services/common.service';
import { HttpClientService } from './Services/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
 @ViewChild('sidenav') sidenav?: MatSidenav;
 public isOpened: boolean = false;
 public opened: boolean | undefined; 
public totalStudent = 0;

 constructor(
  private commonService: CommonService,
  private httpclinet: HttpClientService,
  private router: Router,
) { }

ngOnInit(): void {
  this.commonService.totalStudent$.subscribe((total)=>{
  this.totalStudent = total;
  })
  //khi data = 0 thi

  this.totalStudent === 0 ? this.httpclinet.getStudents().subscribe((data) =>{
    this.commonService.setTotalStudent(data.length);
  }) :this.totalStudent;
  
}
  /**
   * closeSide
   */
  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav?.toggle()
   
    
  }
  public closeLeftSide() {
    this.isOpened = false;
    
  }
}
