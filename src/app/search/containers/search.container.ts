import {Component, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import * as search from '../actions/search.action';
import * as fromSearch from '../reducers';
import {Observable} from 'rxjs';
import {User} from '../models/search.interface';


@Component({
  selector: 'app-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<search  (searchUser)='searchUser($event)'></search>`,
})

export class SearchContainer {
  userList$: Observable<User[]>;
  constructor(private store: Store<fromSearch.State>){
    this.userList$ = this.store.select(fromSearch.getUserList);
  }

  @ViewChild('fileInput') fileInput
  searchUser(input_val) {
    this.store.dispatch(new search.GetUsersListAction(input_val));
    // this.searchService.search(input_val).subscribe(data => {
    // })
  }
}
