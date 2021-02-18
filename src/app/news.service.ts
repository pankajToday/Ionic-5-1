import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL =   environment.apiUrl;
const API_key =  environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

currentArticle :any;

  constructor( private httpClient:HttpClient ) { }

  getData(url){
    return this.httpClient.get(`${API_URL}/${url}&apiKey=${API_key}`);
  }



}
