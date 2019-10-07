import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient,) {
  }

  public postFile(fileToUpload: FormData) {

    const SERVER_URL = '/api/upload';
    return this.httpClient.
    post<any>(SERVER_URL, fileToUpload, {
      reportProgress: true,
      observe: 'events'
    })
    .pipe(map((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return {status: 'progress', message: progress, data: ''};
        case HttpEventType.Response:
          return {status: event.statusText, message: 0, data: (event.body.data).substr(1)}; // Substring taken to remove the leading '/' in the response.
        default:
          return {status: event.type, message: 0, data: ''};
      }
    })
    );
  }

  public getRecommendation(path: string) {

    const SERVER_URL = '/api/recommend';
    const params = new HttpParams().set('filepath', path);
    return this.httpClient.
    get<any>(SERVER_URL, {
      reportProgress: true,
      observe: 'events',
      params: params
    })
    .pipe(map((event) => {
      switch (event.type) {
        case HttpEventType.DownloadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return {status: 'progress', message: progress, algorithms: ''};
        case HttpEventType.Response:
          return { status: event.statusText, message: 0, algorithms: event.body.algorithms };
        default:
          return { status: event.type, message: 0, algorithms: '' };
      }
    })
    );
  }

}
