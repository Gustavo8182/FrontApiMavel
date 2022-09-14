import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Character } from '../Model/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

   publicKey = "924d714a8847e6e91ab2f99942d410ad";
  privateKey = "25c602b85fc7528687a6793d25102a66b8dce877";
  timestamp = new Date().getTime();
  /*hash = Md5.hashStr(
    this.timestamp +this.privateKey+this.publicKey);*/
  hash2 ="3284269f194910347cf9bd0db26c5379"

  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

constructor(
  private httpClient: HttpClient
) { }

getAll(): Observable<Character[]> {
 return this.httpClient.get<Character[]>
 (`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.publicKey}&hash=${this.hash2}`)
 .pipe(map((response: any) => response.data.results));
}
getCharacterById(id: number):Observable<Character>{
  return this.httpClient.get<Character[]>
  (`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${this.publicKey}&hash=${this.hash2}`)
  .pipe(map((response: any) => response.data.results));
}
}
