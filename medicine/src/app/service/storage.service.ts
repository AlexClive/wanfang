import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {
    }

    setStorage(key, value) {
        /*设置storage*/
        localStorage.setItem(key, value);
    }

    getStorage(key) {
      /*获取storage*/
        return localStorage.getItem(key);
    }

    removeStorage(key) {
      /*删除storage*/
        localStorage.removeItem(key);
    }

    clearStorage() {
      /*清除所有的storage*/
        localStorage.clear();
    }

}
