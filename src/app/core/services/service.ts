import {RequestOptions, Headers} from '@angular/http';

export abstract class Service{
  public getOptions(file?: boolean) {
    let headers;
    if (!file) {
      headers = new Headers({
        'Content-Type': 'application/json',
      });
    }else {
      headers = new Headers();
    }
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.api_token) {
      headers.append('Authorization', currentUser.api_token);

      return new RequestOptions({ headers: headers });
    }
    return new RequestOptions({headers: headers});
  }
}
