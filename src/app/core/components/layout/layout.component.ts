import {Component, EventEmitter, Output, Input} from '@angular/core';
import { environment } from '../../../../environments/environment';
import {NgForm} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-layout',
  templateUrl: 'layout.component.html'
})
export class LayoutComponent {
  loginshowhide: boolean =  false;
  registrshowhide: boolean =  false;
  @Input() showPassword: Function;
  @Output() loginUser = new EventEmitter<any>();
  @Output() registerUser = new EventEmitter<any>();
  constructor(){
  }
  @Input() currentUser: any;

  showLogin(){
    this.loginshowhide = true;
    this.registrshowhide = false;
  }

  hideLogin(e){
    if(e.toElement.getAttribute('id') === 'register'){
      this.registrshowhide = true;
    }else{
      this.registrshowhide = false;
    }
    this.loginshowhide = false;
  }

  login(form: NgForm) {
    this.loginUser.emit(form.value);
  }

  registration(form: NgForm) {
    this.registerUser.emit(form.value);
    this.registrshowhide = false;
    this.loginshowhide = true;
  }
}
