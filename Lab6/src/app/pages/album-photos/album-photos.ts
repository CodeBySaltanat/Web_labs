import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css'],
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number | null = null;

  isLoading = false;
  error: string | null = null;
  photos: Photo[] = [];

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
    this.loadPhotos(id);
  }

  loadPhotos(id: number): void {
     this.isLoading = true;
     this.error = null;
      
     this.albumService.getAlbumPhotos(id).subscribe({
      next: (photos) => {
        this.photos = photos.slice(0, 10).map(p => ({
          ...p,
          thumbnailUrl: `https://picsum.photos/seed/${p.id}/150/150`,
          url: `https://picsum.photos/seed/${p.id}/600/600`,
        }));

        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (e) => {
        console.error('photos error:', e);
        this.error = 'Failed to load photos.';
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }
} 