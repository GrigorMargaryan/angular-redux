import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { AppContainer } from './containers/app.container';
import {FormsModule} from '@angular/forms';
import {LayoutComponent} from './components/layout/layout.component';
import {UserService} from './services/user.service';


export const COMPONENTS = [
  AppContainer,
  LayoutComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [UserService],
    };
  }
}


