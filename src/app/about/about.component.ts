
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public age = 10
  public name = ''
  public sex = ''
  public comments= '' ;
  public posts: any;
  
  constructor(private commonService: CommonService,
    private httpclinet: HttpClientService) { 
  
  }

  ngOnInit(): void {
    this.httpclinet.getProfile().subscribe((data) => {
      console.log(data);
      this.name = data.name;
      this.age = data.age;
      this.sex = data.sex;
    });
    this.httpclinet.getComments().subscribe((response) => {
      console.log(response);
      this.comments =  response;
    });
    this.httpclinet.getPost().subscribe((res) => {
      console.log('Post',res);
      this.posts = res;
    })
  }
  public addNewPost(){
    const newData ={title: 'AlabaTrap',author: 'Tommy Teo'};
    this.httpclinet.postNewPosts(newData).subscribe((datares)=>{
      //console.log("datagot",datares);
      this.posts.push(datares);
    })

  }
  
  // public deletePost(){
  //   const newData ={id:1};
  //   this.httpclinet.deletePost(newData).subscribe((datares)=>{
  //     console.log("datagot",datares);
  //   })

  // }
  ageUp(){
    this.commonService.age++;
    this.age = this.commonService.age;
  }
}
