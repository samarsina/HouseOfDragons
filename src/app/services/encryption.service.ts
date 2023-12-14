import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private key = "123"; // Replace with your secret key.


  constructor() { }

  encrypt(data: any): string {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), this.key);
    return encryptedData.toString();
  }

  decrypt(encryptedData: string): any {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.key);
    if (bytes) {
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return null;
  }

}
