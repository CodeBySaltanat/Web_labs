import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private products: Product[] = [
    {
      id: 101,
      categoryId: 1,
      name: 'Apple iPhone 16 128Gb (White)',
      description: 'Apple iPhone 16 with 128Gb storage. Clean iOS experience and strong performance.',
      price: 459989,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium' ,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000',
      commentsNumber: 0,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000&tab=reviews',
      likes: 67,
    },
    {
      id: 102,
      categoryId: 1,
      name: 'Apple iPhone 16 Pro Max 256Gb (Black)',
      description: 'Flagship iPhone with big screen, powerful chip and pro camera system.',
      price: 970000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      commentsNumber: 0,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000&tab=reviews',
      likes: 0,
    },
    {
      id: 103,
      categoryId: 1,
      name: 'Apple iPhone 15 256Gb (Pink)',
      description: 'iPhone 15 with 256Gb storage. Great camera, bright display, and fast charging.',
      price: 455132,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/hc3/86303335350302.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-rozovyi-113137951/?c=750000000',
      commentsNumber: 0,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-rozovyi-113137951/?c=750000000&tab=reviews',
      likes: 0,
    },
    {
      id: 104,
      categoryId: 1,
      name: 'Apple iPhone 13 128Gb (Red)',
      description: 'A reliable iPhone with excellent performance and strong camera for its class.',
      price: 459990,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb9/h39/64004912349214.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-krasnyi-102298431/?c=750000000',
      commentsNumber: 0,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-krasnyi-102298404/?c=750000000&tab=reviews',
      likes: 0,
    },
    {
      id: 105,
      categoryId: 1,
      name: 'Apple iPhone 15 128Gb (Light Blue)',
      description: 'Classic iPhone model with solid camera and good everyday performance.',
      price: 0,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000',
      commentsNumber: 0,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-chernyi-100511715/?c=750000000&tab=reviews',
      likes: 0,
    },

    // Laptops (categoryId: 2)
    {
      id: 201,
      categoryId: 2,
      name: 'Lenovo IdeaPad Slim 5 16IMH9 (16GB/512GB)',
      description: 'Lightweight 14" laptop for study/work. 16GB RAM and fast 512GB SSD.',
      price: 468499,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p03/p90/59741155.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-5-16imh9-16-16-gb-ssd-512-gb-bez-os-83dc008srk-144404718/?c=750000000',
      commentsNumber: 0,
      commentsLink:
        'https://kaspi.kz/shop/p/lenovo-ideapad-slim-5-14-16-gb-ssd-512-gb-bez-os-14imh9-83da004lrk-118338855/?tab=reviews',
      likes: 0,
    },
    {
      id: 202,
      categoryId: 2,
      name: 'ASUS Vivobook 15 X1504ZA (16GB/512GB)',
      description: 'Everyday 15.6" laptop with 16GB RAM and 512GB SSD for smooth multitasking.',
      price: 309900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h1d/85352151515166.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-16-gb-ssd-512-gb-win-11-pro-x1504za-bq1105pw-90nb1022-m0pwd0-117183204/?c=750000000',
      commentsNumber: 0,
      commentsLink:
        'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-16-gb-ssd-512-gb-dos-x1504za-90nb1022-m01me0-117006051/?tab=reviews',
      likes: 0,
    },
    {
      id: 203,
      categoryId: 2,
      name: 'Acer Aspire 3 (16GB/512GB, Win 11)',
      description: 'Balanced laptop for work and study. 15.6" display, 16GB RAM, 512GB SSD.',
      price: 167419,
      rating: 3.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-pro-a325-45-zn-n01si-03k--136300221/?c=750000000', 
      commentsNumber: 0,
      commentsLink:
        'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-512-gb-win-11-15-eh3056ci-a19w6ea-119606499/?tab=reviews',
      likes: 0,
    },
    {
      id: 204,
      categoryId: 2,
      name: 'DELL VOSTRO 3530 (16GB/512GB)',
      description: '15.6" laptop for daily tasks. 16GB RAM and 512GB SSD.',
      price: 0,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2f/pff/3096908.PNG?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dell-vostro-3530-15-6-8-gb-ssd-512-gb-ubuntu-210-bglw-n1601pvnb3530emea01-ubu-128509566/?c=750000000',
      commentsNumber: 0,
      commentsLink:
        'https://kaspi.kz/shop/p/dell-inspiron-15-3530-15-6-16-gb-ssd-512-gb-linux-210-bgci-116700970/?tab=reviews',
      likes: 0,
    },
    {
      id: 205,
      categoryId: 2,
      name: 'Apple MacBook Air 13 (2024, M3, 16GB/512GB)',
      description: 'Thin and light MacBook Air with M3 chip. Great battery life and performance.',
      price: 0,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p81/p15/29102101.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxct3-137228009/?c=750000000',
      commentsNumber: 0,
      commentsLink:
        'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxn3ru-a-118170954/?tab=reviews',
      likes: 0,
    },

    // Headphones (categoryId: 3)
    {
      id: 301,
      categoryId: 3,
      name: 'Sony WH-1000XM5 (Black)',
      description: 'Premium wireless over-ear headphones with active noise cancelling.',
      price: 134999,
      rating: 3.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
      commentsNumber: 0,
      commentsLink: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?tab=reviews',
      likes: 0,
    },
    {
      id: 302,
      categoryId: 3,
      name: 'Apple AirPods Pro (2nd gen, MagSafe case)',
      description: 'In-ear earbuds with noise cancelling and great integration with Apple devices.',
      price: 100354,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
      commentsNumber: 0,
      commentsLink:
        'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?tab=reviews',
      likes: 0,
    },
    {
      id: 303,
      categoryId: 3,
      name: 'Samsung Galaxy Buds2 Pro (White)',
      description: 'Compact true wireless earbuds with rich sound and ANC.',
      price: 182990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/?c=750000000',
      commentsNumber: 0,
      commentsLink: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/?tab=reviews',
      likes: 0,
    },
    {
      id: 304,
      categoryId: 3,
      name: 'JBL Tune 510BT (Black)',
      description: 'Affordable wireless on-ear headphones with JBL Pure Bass sound.',
      price: 0,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000',
      commentsNumber: 0,
      commentsLink: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?tab=reviews',
      likes: 0,
    },
    {
      id: 305,
      categoryId: 3,
      name: 'Apple AirPods Max 2 (Violet)',
      description: 'High-end over-ear headphones with premium build and spatial audio.',
      price: 0,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p38/3402331.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-fioletovyi-128589567/?c=750000000',
      commentsNumber: 0,
      commentsLink: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-fioletovyi-128589567/?tab=reviews',
      likes: 0,
    },

    // Tablets (categoryId: 4)
    {
      id: 401,
      categoryId: 4,
      name: 'Apple iPad 10.9 (2022, Wi‑Fi, 64GB, Silver)',
      description: '10.9" iPad for learning and creativity with all-day battery.',
      price: 356900,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-seryi-104235732/?c=750000000',
      commentsNumber: 0,
      commentsLink:
        'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/?tab=reviews',
      likes: 0,
    },
    {
      id: 402,
      categoryId: 4,
      name: 'Samsung Galaxy Tab S9 (11", 12GB/256GB, Graphite)',
      description: 'Powerful Android tablet with premium display and performance.',
      price: 356900,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000',
      commentsNumber: 0,
      commentsLink:
        'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaeskz-11-djuim-12-gb-256-gb-grafit-112504364/?tab=reviews',
      likes: 0,
    },
    {
      id: 403,
      categoryId: 4,
      name: 'Xiaomi Pad 6 (11", 8GB/256GB, Blue)',
      description: 'Fast and smooth tablet with a large screen and plenty of storage.',
      price: 154996,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000',
      commentsNumber: 0,
      commentsLink:
        'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-goluboi-112468565/?tab=reviews',
      likes: 0,
    },
    {
      id: 404,
      categoryId: 4,
      name: 'Lenovo Tab TB351FU (11.5", 8GB/256GB, Gray)',
      description: 'Android tablet with a big screen and generous storage for the price.',
      price: 0,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h79/h5e/86562583248926.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-tab-tb351fu-11-5-djuim-8-gb-256-gb-seryi-121563179/?c=750000000',
      commentsNumber: 0,
      commentsLink:
        'https://kaspi.kz/shop/p/blackview-tab-8-10-1-djuim-4-gb-128-gb-seryi-113731763/?tab=reviews',
      likes: 0,
    },
  ];

  getCategories(): Category[] {
    return [...this.categories];
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter((p) => p.id !== productId);
  }
  likeProduct(productId: number): void {
  const p = this.products.find(x => x.id === productId);
  if (p) p.likes += 1;
}
}
