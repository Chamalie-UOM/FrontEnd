import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TreeGenerationService {

  constructor(private httpClient: HttpClient,) {
  }

  public getTree(doc_id: string, algorithm: string) {

    const SERVER_URL = '/api/getNewick';
    const params = new HttpParams().set('doc_id', doc_id).set('algorithm', algorithm);
    return this.httpClient.
    get<any>(SERVER_URL, {
      observe: 'events',
      params: params
    })
    .pipe(map((event) => {
      switch (event.type) {
        case HttpEventType.Response:
          return { status: event.statusText, tree: event.body.tree };
        default:
          return { status: event.type, tree: '' };
      }
    })
    );
  }
}
