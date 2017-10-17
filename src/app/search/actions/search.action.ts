import { Action } from '@ngrx/store';
export const GET_USERS_LIST =  '[Search] Get Searched Users List';


export class GetUsersListAction implements Action {
  readonly type = GET_USERS_LIST;
  constructor(public payload: string) {
  }
}

export type Actions
  = GetUsersListAction;
