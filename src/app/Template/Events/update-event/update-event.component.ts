import { EventService } from './../../../Services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventD } from './../../../Model/EventD';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Association } from 'src/app/Model/Association';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  dateEvent: string
  event:EventD;
  assoctiations:Association[];
  publicValue;
  typevalue:string;
  assocValue:any;
  typeEvent:any;
  publicEvent;
  association;
  descriptionEvent;
  titleEvent


  constructor(private router:ActivatedRoute, private es:EventService, private rt:Router,private datePipe: DatePipe) {
    this.dateEvent = this.datePipe.transform(this.dateEvent, 'dd-MM-yyyy');
  }

  ngOnInit(): void {
    this.es.geteventID(this.router.snapshot.params.id).subscribe((data:EventD)=>{
this.association=data.association;
this.dateEvent=data.dateEvent;
this.typeEvent=data.typeEvent;
this.descriptionEvent=data.descriptionEvent;
this.publicEvent=data.publicEvent;
this.titleEvent=data.titleEvent;
console.log(data)
console.log(this.publicEvent)
console.log(data.publicEvent)
console.log(this.publicValue)
    })
  }
  updateEvente(d){
    this.es.updateEvent(this.router.snapshot.params.id,d).subscribe(()=>{
      this.rt.navigate(['/events'])
      alert('Event Updated Succefuly')
    })
  }

}
