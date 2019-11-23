import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor(private httpClient: HttpClient) { }

  public convert(formData: FormData) {

    const SERVER_URL = '/api/convert';
    return this.httpClient.
    post<any>(SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events'
    })
    .pipe(map((event) => {
      switch (event.type) {
        case HttpEventType.Response:
          return { status: event.statusText, out_string: event.body.out_string };
        default:
          return { status: 'error',  out_string: ''};
      }
    })
    );
  }
}
