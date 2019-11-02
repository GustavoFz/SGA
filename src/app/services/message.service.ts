import { Injectable } from '@angular/core';
import messages from '../messages.json'

import { AuthOptions, AuthProvider, User } from './auth.types';

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
