import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExportToDriveService {

  constructor(private httpClient: HttpClient) { }

  public ExportToDrive(tree_id: string) {

    const SERVER_URL = '/api/drive_export';
    return this.httpClient.
    post<any>(SERVER_URL, tree_id, {
      reportProgress: true,
      observe: 'events'
    })
      .pipe(map((event) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              const progress = Math.round(100 * event.loaded / event.total);
              return {status: 'progress', message: progress, data: ''};
            case HttpEventType.Response:
              return { status: event.statusText, message: 0, data: event.body.data };
            default:
              return { status: event.type, message: 0, data: '' };
          }
        })
      );
  }
}
