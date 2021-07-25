import { CommentService } from './../../../Services/comment.service';
import { Comment } from './../../../Model/Comment';
import { Commentd } from './../../../Model/Commentd';
import { Event } from 'src/app/Model/Event';
import { EventService } from './../../../Services/event.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompileEntryComponentMetadata } from '@angular/compiler';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:Event;
  comment:Comment;
  comt= new Commentd();
  myDate = new Date().toString();

  constructor(private es:EventService,private route:ActivatedRoute,private cs:CommentService,private route2:ActivatedRoute,private routes:Router,private datePipe: DatePipe) {
    this.myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
  }

  ngOnInit(): void {
this.getEventID();
;
  }
  getEventID(){
    this.es.geteventID(this.route.snapshot.params.id).subscribe((data)=>{this.event=data;console.log(data);this.getcomments();})
  }
  getcomments(){
    this.cs.getComments(this.event.id).subscribe((data:Comment)=>{this.comment=data;console.log(data)})
  }
  addcomments(description){
    this.comt.description=description;
    this.comt.date=this.myDate
    console.log(this.comt.date)
    console.log(typeof this.comt.date)
    this.comt.eventId="/api/events/"+this.route.snapshot.params.id;
    this.comt.public=true;
    this.cs.addComment(this.comt).subscribe((data)=>{
      console.log(data);
      console.log(description);
      alert("Coment Added" )
      this.routes.navigate(["home"])
    })
    }
/*getcomments2(){
      this.cs.getComments(this.route2.snapshot.params.id).subscribe((da)=>{
       // console.log(data['hydra:member'])
        this.comment=da['hydra:member'];
        console.log(da['hydra:member']);
      },err=>{
        console.log('error',err);
        });

    }*/

}
