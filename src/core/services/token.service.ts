import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _accessToken = 'ccccccc'

  constructor() { }

  getAccessToken() {
    return this._accessToken;
  }
}
