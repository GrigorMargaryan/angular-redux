import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
        <router-outlet></router-outlet>
      </div>`,
})

export class AppContainer {

  constructor( private router: Router) {
  }

}
