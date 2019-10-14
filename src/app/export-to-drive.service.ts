import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExportToDriveService {

  constructor(private httpClient: HttpClient) { }

  public ExportToDrive(tree_id: string) {

    const SERVER_URL = '/api/export';
    const params = new HttpParams().set('tree_id', tree_id);
    return this.httpClient.
    post<any>(SERVER_URL, tree_id, {
      reportProgress: true,
      observe: 'events',
      params : params
    })
      .pipe(map((event) => {
          switch (event.type) {
            case HttpEventType.Response:
              return { status: event.statusText, message: 0, data: event.body.data };
            default:
              return { status: event.type, message: 0, data: '' };
          }
        })
      );
  }
}
