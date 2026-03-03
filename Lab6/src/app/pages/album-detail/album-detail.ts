import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css'],
})
export class AlbumDetailComponent implements OnInit {
  isLoading = false;
  isSaving = false;
  error: string | null = null;

  album: Album | null = null;
  titleDraft = '';

  private albumId!: number;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly albumService: AlbumService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isFinite(id) || id <= 0) {
      this.error = 'Invalid album id.';
      return;
    }

    this.albumId = id;
    this.loadAlbum();
  }

  loadAlbum(): void {
    this.isLoading = true;
    this.error = null;

    this.albumService
      .getAlbum(this.albumId)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (album) => {
          this.album = album;
          this.titleDraft = album.title;
          this.cdr.detectChanges();
        },
        error: (e) => {
          console.error('album detail error:', e);
          this.error = 'Failed to load album details.';
          this.cdr.detectChanges();
        },
      });
  }

  save(): void {
    if (!this.album) return;

    const nextTitle = this.titleDraft.trim();
    if (nextTitle.length === 0) {
      this.error = 'Title cannot be empty.';
      this.cdr.detectChanges();
      return;
    }

    this.isSaving = true;
    this.error = null;

    const updated: Album = { ...this.album, title: nextTitle };

    this.albumService
      .updateAlbum(updated)
      .pipe(finalize(() => (this.isSaving = false)))
      .subscribe({
        next: (album) => {
          this.album = album;
          this.titleDraft = album.title;
          this.cdr.detectChanges();
        },
        error: (e) => {
          console.error('update error:', e);
          this.error = 'Failed to save album title.';
          this.cdr.detectChanges();
        },
      });
  }
}