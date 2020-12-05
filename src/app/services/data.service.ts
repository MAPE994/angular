import { Album, Photo, User } from './../interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) { 
  }

  URL = {
    "baseUrl": " https://jsonplaceholder.typicode.com",
    "resource": {
        "user" : "/users",
        "album": "/albums",
        "photo": "/photos"
    }
}

  getUsers(): Observable<Array<User>>{
    return this.http.get<Array<User>>(this.URL.baseUrl + this.URL.resource.user);
  }

  getAlbums(): Observable<Array<Album>> {
    return this.http.get<Array<Album>>(this.URL.baseUrl + this.URL.resource.album);
  }

  getAlbumsById(userId: any): Observable<Array<Album>>{
    const params = new HttpParams().set("userId", userId);
    return this.http.get<Array<Album>>(this.URL.baseUrl + this.URL.resource.album, { params });
  }

  getPhotos(): Observable<Array<Photo>> {
    return this.http.get<Array<Photo>>(this.URL.baseUrl + this.URL.resource.photo);
  }

  getPhotosById(albumId: any): Observable<Array<Photo>>{
    const params = new HttpParams().set("albumId", albumId);
    return this.http.get<Array<Photo>>(this.URL.baseUrl + this.URL.resource.photo, { params });
  }
}
