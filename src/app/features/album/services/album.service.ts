import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumModel } from '../models/album.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbumPage(page: number, pageSize: number): Observable<AlbumModel[]> {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('pageSize', pageSize);
    return this.http.get<AlbumModel[]>(`${environment.apiBaseUrl}/api/album`, { params: params});
  }

  createAlbum(albumName: string): Observable<AlbumModel> {
    return this.http.post<AlbumModel>(`${environment.apiBaseUrl}/api/album`, { name: albumName });
  }
}
