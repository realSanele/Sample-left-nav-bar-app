import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  uname: '';
  surname: '';
  age: number;
  email: '';
  gender: '';

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
      this.uname = params['name'];
      this.surname = params['surname'];
      this.age = params['age'];
      this.email = params['email'];
      this.gender = params['gender'];

      console.log(this.email);
      console.log(this.uname);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.gender);
    });
  }

}
