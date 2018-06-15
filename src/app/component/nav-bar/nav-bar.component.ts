import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() name;
  @Input() page;

  /*pages = [
            {name : 'Event', page: 'event-page'},
            {name : 'View', page: 'view'},
            {name : 'Home', page: 'page3'}
          ];*/
    @Input() uname: '';
    @Input() surname: '';
    @Input() age: number;
    @Input() email: '';
    @Input() gender: '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.uname = params['name'];
      this.surname = params['surname'];
      this.age = params['age'];
      this.email = params['email'];
      this.gender = params['gender'];
      
    });
  }

  navigator(){
    if(this.name == 'Event'){
      this.router.navigate(['details/Event']);
    }else if(this.name == 'View'){
      this.router.navigate(['details/View'], {queryParams : {name: this.uname, surname : this.surname, email : this.email, age : this.age, gender : this.gender}});
    }
  }

}
