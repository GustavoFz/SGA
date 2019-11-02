import { Injectable } from '@angular/core';
import messages from '../messages.json'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {}

  public getMessage(code: string): string {
    const message = messages[code];

    if (message) {
      return message;
    } else {
      return 'Ocorreu um erro.';
    }
  }

}
