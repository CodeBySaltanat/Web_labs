import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './products/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private readonly productService = inject(ProductService);

  categories: Category[] = this.productService.getCategories();
  selectedCategoryId: number | null = null;

  favorites: Product[] = [];

  get selectedProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.productService.getProductsByCategory(this.selectedCategoryId);
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  // ❤️ Like
  likeProduct(id: number) {
    this.productService.likeProduct(id);

    // если продукт есть в favorites — обновим там лайк тоже
    this.favorites = this.favorites.map(p =>
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    );
  }

  // ⭐ Add to favorites
  addToFavorites(p: Product) {
    if (!this.favorites.some(x => x.id === p.id)) {
      this.favorites = [...this.favorites, p];
    }
  }

  // ⭐ Remove from favorites
  removeFromFavorites(id: number) {
    this.favorites = this.favorites.filter(p => p.id !== id);
  }

  // 🗑 Delete (удаляем из сервиса + из favorites)
  deleteFromList(id: number) {
    this.productService.deleteProduct(id);
    this.removeFromFavorites(id);
  }
}