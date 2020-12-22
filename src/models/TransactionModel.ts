import Model from 'models/Model';
import { ModelBuilderObject, Transaction } from 'models/interface';
import { db } from 'src/firebaseServices';
import type fb from 'firebase';

export default class TransactionModel extends Model<Transaction> {
  public static REF = db.collection('transactions') as fb.firestore.CollectionReference<ModelBuilderObject<Transaction>>;
}
