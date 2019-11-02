import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Ferramenta } from '../interfaces/ferramenta';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FerramentaService {
  private ferramentaCollection: AngularFirestoreCollection<Ferramenta>;

  constructor(private afs: AngularFirestore) {
    this.ferramentaCollection = this.afs.collection<Ferramenta>('Ferramenta');
  }

  getFerramentas() {
    return this.ferramentaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addFerramenta(ferramenta: Ferramenta) {
    return this.ferramentaCollection.add(ferramenta);
  }

  getFerramenta(id: string) {
    return this.ferramentaCollection.doc<Ferramenta>(id).valueChanges();
  }

  updateFerramenta(id: string, ferramenta: Ferramenta) {
    return this.ferramentaCollection.doc<Ferramenta>(id).update(ferramenta);
  }

  deleteFerramenta(id: string) {
    return this.ferramentaCollection.doc(id).delete();
  }

}
