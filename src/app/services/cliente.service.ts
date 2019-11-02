import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Cliente } from '../interfaces/cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteCollection: AngularFirestoreCollection<Cliente>;

  constructor(private afs: AngularFirestore) {
    this.clienteCollection = this.afs.collection<Cliente>('Cliente');
  }

  getClientes() {
    return this.clienteCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addCliente(cliente: Cliente) {
    return this.clienteCollection.add(cliente);
  }

  getCliente(id: string) {
    return this.clienteCollection.doc<Cliente>(id).valueChanges();
  }

  updateCliente(id: string, cliente: Cliente) {
    return this.clienteCollection.doc<Cliente>(id).update(cliente);
  }

  deleteCliente(id: string) {
    return this.clienteCollection.doc(id).delete();
  }

}
