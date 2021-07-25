import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
urlcomment="http://localhost:8000/api/comments?eventId=/api/events/";
urlcomment2="http://localhost:8000/api/comments";
  constructor(private http : HttpClient) { }

  getComments(id):Observable<any>{
      return this.http.get(this.urlcomment+id);
    }
   addComment(data){
    return this.http.post(this.urlcomment2,data);
   }

  }

