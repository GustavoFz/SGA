import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Afericao } from '../interfaces/afericao';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AfericaoService {
  private afericaoCollection = this.afs.collection<Afericao>;

  constructor(private afs: AngularFirestore) {
    this.afericaoCollection = this.afs.collection<Afericao>('Afericao');
  }

  getAfericoes() {
    return this.afericaoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addAfericao(afericao: Afericao) {
    return this.afericaoCollection.add(afericao);
  }

  getAfericao(id: string) {
    return this.afericaoCollection.doc<Afericao>(id).valueChanges();
  }

  updateAfericao(id: string, afericao: Afericao) {
    return this.afericaoCollection.doc<Afericao>(id).update(afericao);
  }

  deleteAfericao(id: string) {
    return this.afericaoCollection.doc(id).delete();
  }

}
