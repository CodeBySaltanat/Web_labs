export interface Product {
  id: number;
  categoryId: number;

  name: string;
  description: string;
  price: number;
  rating: number;

  image: string;
  link: string;

  commentsNumber: number;
  commentsLink: string;

  likes: number;
}

