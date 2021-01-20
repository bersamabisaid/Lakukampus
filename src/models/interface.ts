import type firebase from 'firebase';

export type StoredModel<T> = T & {
  _created: firebase.firestore.Timestamp;
  _updated: firebase.firestore.Timestamp;
  _deleted: firebase.firestore.Timestamp | null;
}

export interface User {
  name: string;
  email: string;
  img: string;
  address: string;
  phoneNumber: string;
  birthDate: firebase.firestore.Timestamp | null;
}

export interface Seller {
  user: firebase.firestore.DocumentReference<User>;
  shops: firebase.firestore.DocumentReference<Shop>[];
  faculty: string;
  program: string;
  studentId: string;
  address: string;
  identityImg: string;
  batchYear: number;
}

export interface Item {
  category: firebase.firestore.DocumentReference<Category> | null;
  name: string;
  img: string;
  stock: number;
  price: number;
  description: string;
  tags: string[];
}

export interface Category {
  name: string;
}

export interface Shop {
  name: string;
  description: string;
  headerImg: string;
  img: string;
}

export interface ItemPurchased {
  item: firebase.firestore.DocumentReference<Item>;
  qty: number;
  description: string;
}

export interface Transaction {
  user: firebase.firestore.DocumentReference<User>;
  shop: firebase.firestore.DocumentReference<Shop>;
}

export interface Chat {
  participants: firebase.firestore.DocumentReference<User>[];
  shop: firebase.firestore.DocumentReference<Shop>;
}

export interface ChatMessage {
  from: firebase.firestore.DocumentReference<User>;
  content: string | Item;
}
