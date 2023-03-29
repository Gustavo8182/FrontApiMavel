import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Character } from '../Model/character.model';
import {Md5} from 'ts-md5';



@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

 publicKey = "5a237863b3cc2061003cbbc4fe20dc06";
 timestamp = 1
 hash = Md5.hashStr(this.timestamp+'fbf255068eccea6d0ef951b9f25626b57ab2fe725a237863b3cc2061003cbbc4fe20dc06');

 options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

constructor(
  private httpClient: HttpClient
) { }

getAll(): Observable<Character[]> {
  console.log(this.hash);
 return this.httpClient.get<Character[]>
 (`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.publicKey}&hash=${this.hash}`,this.options)
 .pipe(map((response: any) => response.data.results));
}
getCharacterById(id: number):Observable<Character>{
  return this.httpClient.get<Character[]>
  (`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${this.publicKey}&hash=${this.hash},this.options`)
  .pipe(map((response: any) => response.data.results));
}
}
