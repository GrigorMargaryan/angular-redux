import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Service } from '../../core/services/service';
import { environment } from '../../../environments/environment';


@Injectable()

export class SearchService extends Service {

  constructor(private  http: Http) {
    super();
  }

  search(data: any): any {
    console.log(data);

    return this.http.post(`${environment.apiUrl}/rr`, data, this.getOptions())
      .map((response: Response) => response.json())
      .catch(error => error);
  }

}
