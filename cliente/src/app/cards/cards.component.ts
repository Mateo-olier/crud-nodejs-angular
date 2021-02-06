import { Component, OnInit, HostBinding } from '@angular/core';
import{ UserService } from '../service/user.service'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @HostBinding ('class') classes = 'row';
  user: any = [];

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(
      res => {
        this.user = res;
      },
      err => console.error(err)
    );
  }
  delete(id:string){
    this.userService.eliminarUser(id).subscribe(
      res => {
        console.log(res);
        this.getUsers();
        this.router.navigate(['/user']);
      },
      err => console.error(err)
    );
  }


}
