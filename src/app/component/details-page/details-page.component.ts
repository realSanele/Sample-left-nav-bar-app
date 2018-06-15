import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  pages = [
            {name : 'Event', page: 'Event'},
            {name : 'View', page: 'View'},
            {name : 'Home', page: 'Home'}
          ];

  uname: '';
  surname: '';
  age: number;
  email: '';
  gender: '';

        constructor(private route: ActivatedRoute /*private router: Router*/) { }

  /*ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.uname = params['name'];
      this.surname = params['surname'];
      this.age = params['age'];
      this.email = params['email'];
      this.gender = params['gender'];
  }*/

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
    this.uname = params['name'];
    this.surname = params['surname'];
    this.age = params['age'];
    this.email = params['email'];
    this.gender = params['gender'];

    /*console.log(this.email);
    console.log(this.uname);
    console.log(this.surname);
    console.log(this.age);
    console.log(this.gender);*/
    
  });
}

}
