import { Component, OnInit,HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { User } from '../models/usuer'
import { UserService } from '../service/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @HostBinding ('class') classes = 'row';
  user: User = {
    iduser:0,
    nombre:'',
    password:''
  };

  edit: boolean = false;

  constructor(public userService:UserService,private router:Router, private activateRoutes:ActivatedRoute) { }

  ngOnInit(): void {
    const parametro = this.activateRoutes.snapshot.params;

    if(parametro.iduser){
      this.userService.getUser(parametro.iduser)
      .subscribe(
        res => {
          console.log(res);
          this.user = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  add(){
    delete this.user.iduser;
    this.userService.guardarUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/user']);
      },
      err => console.error(err)
    );
  }
  update(){
    this.userService.actualizarUser(this.user.iduser,this.user).subscribe(
      res => {
        console.log(this.user);
        this.router.navigate(['/user']);
      },
      err => console.error(err)
    );
  }
}
