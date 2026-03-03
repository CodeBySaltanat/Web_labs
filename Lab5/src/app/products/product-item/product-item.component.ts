import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Input() isFavorite = false;

  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  @Output() addToFavorites = new EventEmitter<Product>();
  @Output() removeFromFavorites = new EventEmitter<number>();

  onAdd() {
    this.addToFavorites.emit(this.product);
  }

  onRemove() {
    this.removeFromFavorites.emit(this.product.id);
  }

  likeItem(): void {
    this.like.emit(this.product.id);
  }

  requestDelete(): void {
    this.delete.emit(this.product.id);
  }

  shareToWhatsApp(): void {
    const text = encodeURIComponent(`Check this out: ${this.product.name}`);
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareToTelegram(): void {
    const text = encodeURIComponent(`Check this out: ${this.product.name}`);
    const url = encodeURIComponent(this.product.link);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}