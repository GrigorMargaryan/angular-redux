import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Service} from './service';
import { environment } from '../../../environments/environment';
import {LoginData} from '../models/user.model';


@Injectable()

export class UserService extends Service {

  constructor(private  http: Http) {
    super();
  }

  login(data: LoginData): any {
    return this.http.post(`${environment.apiUrl}/login`, data, this.getOptions())
      .map((response: Response) => response.json())
      .catch(error => error);
  }


  registration(data: any): any {

    return this.http.post(`${environment.apiUrl}/register`, data, this.getOptions())
      .map((response: Response) => response.json())
      .catch(error => error);
  }

}
