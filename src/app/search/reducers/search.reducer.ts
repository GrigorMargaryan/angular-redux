import * as searchActions from '../actions/search.action';
import {User} from '../models/search.interface';
export interface State {
  userList: User [];

}
const initialState: State = {
  userList: [],

};
export function reducer(state = initialState, action: searchActions.Actions): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
export const getUserList = (state: State) => state.userList;
