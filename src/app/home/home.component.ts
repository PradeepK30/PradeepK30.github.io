import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShown = true;
  order: string;
  filter: string;
  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }
  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        '/users',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
  toggleShow() {
  this.isShown = ! this.isShown;
  }
  ngOnInit() {
    this.route.queryParams
      .filter(params => params.order)
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.order = params.order;
        this.filter = params.filter;
        console.log(this.order); // popular
      }
    );
    this.isShown = true ; // shown by default
    localStorage.setItem('testObject', JSON.stringify({name: 'Nippun'}));
    localStorage.setItem('employee', JSON.stringify({"1033513": 'Nippun Kumar'}));

    let lName = localStorage.getItem('lastName');
    console.log('Angular 9 get', lName);
  }

}
