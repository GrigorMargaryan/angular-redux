import {Component, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {UserService} from '../services/user.service';
import {UserInfo} from '../models/user.model';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <app-layout></app-layout>
        <router-outlet></router-outlet>
      </div>`,
})

export class AppContainer {


  user: UserInfo = {
    name: '',
    email: '',
    token: '',
    img: ''
  };
  users;
  currentUser: any;

  constructor(private userService: UserService, private router: Router){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }


  loginUser(form_value) {

    this.userService.login(form_value).subscribe(data => {
      this.users = data;
      console.log(data);
      if (data)
        this.router.navigate(['search']);
      localStorage.setItem('currentUser', JSON.stringify(data.data));
    });

  }

  @ViewChild('fileInput') fileInput
  registerUser(form_value) {
    this.userService.registration(form_value).subscribe(data => {
      this.user = data;
      if(data){
        // this.router.navigate(['login']);
      }
    })

  }

  showPassword() {

    let key_attr = document.getElementById('key').getAttribute('type')
    if(key_attr != 'text') {
      document.getElementById('checkbox').classList.add('show');
      document.getElementById('key').setAttribute('type', 'text');

    } else {

      document.getElementById('checkbox').classList.remove('show');
      document.getElementById('key').setAttribute('type', 'password');

    }
  }

}
