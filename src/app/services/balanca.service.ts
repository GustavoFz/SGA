import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Balanca } from '../interfaces/balanca';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BalancaService {
  private balancaCollection: AngularFirestoreCollection<Balanca>;

  constructor(private afs: AngularFirestore) {
    this.balancaCollection = this.afs.collection<Balanca>('Balanca');
  }

  getBalancas() {
    return this.balancaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addBalanca(balanca: Balanca) {
    return this.balancaCollection.add(balanca);
  }

  getBalanca(id: string) {
    return this.balancaCollection.doc<Balanca>(id).valueChanges();
  }

  updateBalanca(id: string, balanca: Balanca) {
    return this.balancaCollection.doc<Balanca>(id).update(balanca);
  }

  deleteBalanca(id: string) {
    return this.balancaCollection.doc(id).delete();
  }
}
