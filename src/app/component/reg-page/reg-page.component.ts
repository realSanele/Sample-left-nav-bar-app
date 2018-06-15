import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {

  Email: string;
  Name: string;
  Surname: string;
  Age: string;
  Gender: string;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  register(){
    /*console.log(this.Email);
    console.log(this.Name);
    console.log(this.Surname);
    console.log(this.Age);
    console.log(this.Gender);*/

    //this.router.navigateByUrl('./veiw.component.html');
    this.router.navigate(['details'], {queryParams : {name: this.Name, surname : this.Surname, email : this.Email, age : this.Age, gender : this.Gender}});
  }

  booking(){
    
  }

}
