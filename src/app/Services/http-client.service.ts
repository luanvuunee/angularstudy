import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Student } from '../models/Student';
@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  private REST_API_URL = 'http://localhost:3000/'


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // Authorization: 'my-auth-token'
    })
  };

 
   
  constructor(private httpClient: HttpClient) {}

  public getProfile():Observable<any> {
    const url = `${this.REST_API_URL}profile`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe();
  }
  public getComments():Observable<any> {
    const url = `${this.REST_API_URL}comments`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe();
  }

  /**
   * postProfile
   */
  public getPost() {
    const url = `${this.REST_API_URL}posts`;
    return this.httpClient.get(url,this.httpOptions)
    
  }
  public getStudents() {
    const url = `${this.REST_API_URL}students`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe();
  }
  public getStudent(studentId: number) {
    const url = `${this.REST_API_URL}students/`+studentId;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe();
  }


  
  public postNewPosts(data:any) {
    const url = `${this.REST_API_URL}posts`;
    return this.httpClient.post(url,data,this.httpOptions)
  }
  /**
   * postNewStudents
   */
  public postNewStudents(data:Student) {
    const url = `${this.REST_API_URL}students`;
    return this.httpClient.post(url,data,this.httpOptions)
    
  }
  /**
   * modifyStudent
   */
  public modifyStudent(studentId: number,data :Student) {
    const url =`${this.REST_API_URL}students/`+studentId;
    return this.httpClient.put<any>(url,data,this.httpOptions)
    
  }

  /**
   * deleteStudent
   */
  public deleteStudent(studentId:number) {
    const url =`${this.REST_API_URL}students/`+studentId;
    return this.httpClient.delete<any>(url)
    
  }

  /**
   * getRandomStudent
   */
  public getRandomStudent() {
    const url = `https://randomuser.me/api/?results=1`;
    return this.httpClient.get<any>
    (url,this.httpOptions)
    
  }
  // public deletePost(data:any) {
  //   const url = `${this.REST_API_URL}delete/1`;
  //   return this.httpClient.post(url,data,this.httpOptions)
  // }
   private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
 
}
