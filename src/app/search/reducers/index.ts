import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromSearch from './search.reducer';
export interface SearchState {
  search: fromSearch.State;
}
export interface State extends fromRoot.State {
  search: SearchState;
}
export const reducers = {
  search: fromSearch.reducer,
};
export const selecSearchState = createFeatureSelector<SearchState>('search');
export const selectSearchStatusState = createSelector(
  selecSearchState,
  (state: SearchState) => state.search
);

export const getUserList = createSelector(selectSearchStatusState, fromSearch.getUserList);
