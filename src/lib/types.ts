export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    orders?: Order[];
    reviews?: Review[];
    carts?: Cart[];
    wishList?: WishList[];
}

export interface Product {
    id: string;
    name: string;
    description: string;
    details: string[];
    brand: string;
    price: number;
    discount?: number;
    finalPrice: number;
    stock: number;
    categoryId: string;
    category?: Category;
    images?: ProductImage[];
    reviews?: Review[];
    createdAt: Date;
    updatedAt: Date;
    offer?: Offer;
    offerId?: string;
    wishList?: WishList[];
    cartItems?: CartItem[];
}

export interface ProductImage {
    id: string;
    url: string;
    productId: string;
    product?: Product;
    createdAt: Date;
}

export interface Offer {
    id: string;
    title: string;
    description?: string;
    discount: number;
    startDate: Date;
    endDate: Date;
    image?: string;
    products?: Product[];
    createdAt: Date;
}

export interface WishList {
    id: string;
    userId: string;
    user?: User;
    productId: string;
    product?: Product;
    createdAt: Date;
}

export interface Category {
    id: string;
    name: string;
    products: Product[];
    subCategory: SubCategory[];
}

export interface SubCategory {
    id: string;
    name: string;
    categoryId: string;
    category?: Category;
}

export interface Cart {
    id: string;
    items?: CartItem[];
    userId?: string;
    user?: User;
    createdAt: Date;
    updatedAt: Date;
}

export interface CartItem {
    id: string;
    cart?: Cart;
    cartId: string;
    product?: Product;
    productId: string;
    quantity: number;
}

export interface Order {
    id: string;
    userId: string;
    user?: User;
    total: number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface Review {
    id: string;
    userId: string;
    user?: User;
    productId: string;
    product?: Product;
    rating: number;
    comment?: string;
    createdAt: Date;
}

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export enum OrderStatus {
    PENDING = "PENDING",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED"
}