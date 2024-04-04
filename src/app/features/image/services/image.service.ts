import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { ImageModel } from '../models/image.model';
import { Observable } from 'rxjs';
import { GetImgsRequest } from '../../album/models/get-imgs-request.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  uploadImage(file: File, name: string, albumId: string): Observable<ImageModel> {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('fileName', name)
    formData.append('albumId', albumId)
    return this.http.post<ImageModel>(`${environment.apiBaseUrl}/api/image`, formData);
  }

  getImagesByAlbumId(request: GetImgsRequest): Observable<ImageModel[]> {
    let params = new HttpParams();
    params = params.append('page', request.page);
    params = params.append('pageSize', request.pageSize);
    params = params.append('albumId', request.albumId);
    return this.http.get<ImageModel[]>(`${environment.apiBaseUrl}/api/image`, {params: params})
  }
}
