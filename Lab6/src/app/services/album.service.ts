import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  private readonly albumsSubject = new BehaviorSubject<Album[]>([]);
  readonly albums$ = this.albumsSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
      tap((albums) => this.albumsSubject.next(albums))
    );
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album).pipe(
      tap((updated) => {
        const current = this.albumsSubject.value;
        const next = current.map(a =>
          a.id === updated.id ? { ...a, title: updated.title } : a
        );
        this.albumsSubject.next(next);
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`).pipe(
      tap(() => {
        const next = this.albumsSubject.value.filter(a => a.id !== id);
        this.albumsSubject.next(next);
      })
    );
  }

  createAlbum(payload: { userId: number; title: string }): Observable<Album> {
    return this.http.post<Album>(`${this.baseUrl}/albums`, payload).pipe(
      tap((created) => {
        const current = this.albumsSubject.value;
        this.albumsSubject.next([created, ...current]);
      })
    );
  }
  getAlbumsSnapshot(): Album[] {
  return this.albumsSubject.value;
}

}