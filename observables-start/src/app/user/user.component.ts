import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from  '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private usersService: UsersService ) { }
  // Observables support three parameters one for data, error, and complete events.
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        },
        () => {

        },
        () => {

        }
      );
  }
  onActivated(){
    this.usersService.userActivated.next(this.id);
  }

}
