import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  @Input({ required: true }) products: Product[] = [];
  @Input() favoritesMode = false;

  displayed: Product[] = [];

  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();
  @Output() addToFavorites = new EventEmitter<Product>();
  @Output() removeFromFavorites = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.displayed = [...this.products];
    }
  }

  onDelete(productId: number): void {
    this.displayed = this.displayed.filter((p) => p.id !== productId);
    this.delete.emit(productId);
  }

  onLike(productId: number): void {
    this.like.emit(productId);
  }

  onAdd(p: Product): void {
    this.addToFavorites.emit(p);
  }

  onRemove(productId: number): void {
    this.removeFromFavorites.emit(productId);
  }
}