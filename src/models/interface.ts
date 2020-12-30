import type firebase from 'firebase';

export type ModelBuilderObject<T> = T & {
  _created: firebase.firestore.Timestamp;
  _updated: firebase.firestore.Timestamp;
  _deleted: firebase.firestore.Timestamp | null;
}

export interface BuilderObject<T> {
  buildObj: () => ModelBuilderObject<T>;
  [key: string]: (val: unknown) => this | ModelBuilderObject<T>;
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
  shop: firebase.firestore.DocumentReference<Shop>;
  category: firebase.firestore.DocumentReference<Category> | null;
  name: string;
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
  itemPurchased: ItemPurchased[];
}

export interface Chat {
  participants: firebase.firestore.DocumentReference<User>[];
  shop: firebase.firestore.DocumentReference<Shop>;
  messages: ChatMessage[];
}

export interface ChatMessage {
  from: firebase.firestore.DocumentReference<User>;
  content: string;
}
