import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { SearchContainer } from './containers/search.container';
import { SearchComponent } from './components/search/search.component';
import {SearchService} from './services/search.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';


export const COMPONENTS = [
  SearchContainer,
  SearchComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})


export class SearchModule {
  static forRoot() {
    return {
      ngModule: RootSearchModule,
      providers: [SearchService],
    };
  }
}

@NgModule({
  imports: [
    SearchModule,
    RouterModule.forChild([{ path: 'search', component: SearchContainer}]),
    StoreModule.forFeature('search', reducers),
  ],

})

export class RootSearchModule{}
