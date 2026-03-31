import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
/*import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';                      
import { Observable } from 'rxjs';                    //2 */
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,                    //2
  imports: [CommonModule, RouterLink /*, FormsModule]*/],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css'],
})
export class AlbumsComponent implements OnInit {
  isLoading = false;
  error: string | null = null;

  deletingIds = new Set<number>(); 

albums$; /* albums$!: Observable<Album[]>;
filteredAlbums$!: Observable<Album[]>;
search = '';                                         //2 */

constructor(
  private readonly albumService: AlbumService,
  private readonly cdr: ChangeDetectorRef
) {
  this.albums$ = this.albumService.albums$;
}

  /*3sortAlbums() {
  this.albums.sort((a, b) => a.title.localeCompare(b.title));   
}*/
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
    /*if (!confirm('Delete this album?')) return;

  this.deletedIds.push(id);
  localStorage.setItem('deletedAlbums', JSON.stringify(this.deletedIds));

  this.albumService.deleteAlbum(id).subscribe(() => {
    this.applyFilter(); 
  }); */
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

  /* deletedIds: number[] = JSON.parse(localStorage.getItem('deletedAlbums') || '[]');*/

//2
  /*get filteredAlbums() {
  if (!this.search) {
    return this.albums;
  }

  return this.albums.filter(a =>
    a.title.toLowerCase().includes(this.search.toLowerCase())
  );
}*/


//4 favorites = new Set<number>();
/*toggleFavorite(id: number) {
  if (this.favorites.has(id)) {
    this.favorites.delete(id);
  } else {
    this.favorites.add(id);
  }
}

isFavorite(id: number) {
  return this.favorites.has(id);                  
}*/

/*штмл 4 <button (click)="toggleFavorite(a.id); $event.stopPropagation()">
  {{ isFavorite(a.id) ? '★' : '☆' }}
</button>*/
}





/*<input
  type="text"
  placeholder="Search albums..."
  [(ngModel)]="search"
/>*/