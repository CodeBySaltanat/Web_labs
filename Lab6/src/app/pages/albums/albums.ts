import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css'],
})
export class AlbumsComponent implements OnInit {
  isLoading = false;
  error: string | null = null;

  deletingIds = new Set<number>();

albums$;

constructor(
  private readonly albumService: AlbumService,
  private readonly cdr: ChangeDetectorRef
) {
  this.albums$ = this.albumService.albums$;
}


  ngOnInit(): void {
    if (this.albumService.getAlbumsSnapshot().length === 0) {
      this.reload();
    }
  }

  reload(): void {
    this.isLoading = true;
    this.error = null;

    this.albumService.fetchAlbums().subscribe({
      next: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (e) => {
        console.error(e);
        this.error = 'Failed to load albums. Try again later.';
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    event.stopPropagation();
    if (this.deletingIds.has(id)) return;

    this.deletingIds.add(id);

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.deletingIds.delete(id);
        this.cdr.detectChanges();
      },
      error: (e) => {
        console.error(e);
        this.error = 'Failed to delete album.';
        this.deletingIds.delete(id);
        this.cdr.detectChanges();
      },
    });
  }
}