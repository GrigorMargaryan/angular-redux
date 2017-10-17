import {Component, EventEmitter, Output,} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent {
  @Output() searchUser = new EventEmitter<any>();

  search(e){
    this.searchUser.emit(e.target.value);
  }
}

