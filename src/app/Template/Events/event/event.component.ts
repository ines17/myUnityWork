import { HttpClient } from '@angular/common/http';
import { EventService } from './../../../Services/event.service';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  events: any = [];
  date: Date = new Date('2019-01-16');
  page = 1;
  itemsPerPage = 3;
  loading: boolean;
  totalItems: any;
  url = 'http://localhost:8000/api/events?page=${page}';

  constructor(private es: EventService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;
    this.getEvent2();
  }
  getEvent2() {
    this.es.getevent().subscribe((data) => {
      this.events = data;
      this.loading=false;
      console.log(data);
    });
  }
  getPage(page: any) {
    this.http.get(this.url).subscribe((data) => {
      console.log(data);
      this.events = data;
    });
  }

  /*loadevent(){
    this.es.getevent().subscribe((data) => {
      this.events = data['hydra:member'];
      console.log(data['hydra:member'
    ]); }); }*/
  /*getEvents(){
      this.es.getevent().subscribe((data)=>{
       // console.log(data['hydra:member'])
        this.events=data['hydra:member'];
        console.log(data['hydra:member']);
      },err=>{
        console.log('error',err);
        });
    getEvents(){
      this.es.getevent().subscribe((data)=>{this.events=data;console.log(data)})


    }*/
}
