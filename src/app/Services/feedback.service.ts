import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  urlFeedback="http://127.0.0.1:8000/feedback/getAll";
  constructor(private http : HttpClient) { }
  getFeedBack():Observable<any>{
    return this.http.get(this.urlFeedback);
  }
}
