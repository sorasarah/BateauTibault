import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this.storage?.set(key, value);
  }
  public get(key: string) {
    return this.storage?.get(key)
  }
  // Get the length of the array
  public async getArrayLength(key: string): Promise<number> {
    const array = await this.get(key);

    if (array && Array.isArray(array)) {
      return array.length;
    } else {
      return 0;
    }
  }
}
