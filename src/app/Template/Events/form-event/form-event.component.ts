import { EventD } from './../../../Model/EventD';
import { Event } from 'src/app/Model/Event';
import { EventService } from './../../../Services/event.service';
import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Association } from 'src/app/Model/Association';
@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})

export class FormEventComponent implements OnInit {
  dateEvent: NgbDateStruct;
  events:EventD;
  assoctiations:Association[];
  publicValue:string;
  typevalue:string;
  assocValue:string;

  constructor(private eventser:EventService, private route:Router) { }

  ngOnInit(): void {
  }
  addevent(events){
    this.eventser.addevent(events).subscribe((data)=>{
      console.log(data)
      alert("Event Added" )
      this.route.navigate(["home"])
    })
    }
}
