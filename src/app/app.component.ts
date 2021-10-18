import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
 @ViewChild('sidenav') sidenav?: MatSidenav;
 public isOpened: boolean = false;
 public opened: boolean | undefined;
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
