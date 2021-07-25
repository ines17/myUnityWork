import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { EventService } from 'src/app/Services/event.service';
import { Tooltip } from 'Tooltip';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  dateFormat = require('dateformat');
  allEventsCalendar = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true, // initial value
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: this.allEventsCalendar,
    eventClick: this.infoEvent.bind(this),
    firstDay: 1,
    eventColor: 'rgba(140,47,192,1)'
  };
  allEvents: any[];
  constructor(private eventSer: EventService) {}

  ngOnInit(): void {
    this.getEvents();
console.log(this.calendarOptions);
  }
  getEvents() {
    this.eventSer.getevent().subscribe((data) => {
      this.allEvents = data;
      this.allEventsCalendar=[];
      this.allEvents.map((x) => {

        this.allEventsCalendar.push({
          title: x.title_event,
          date: this.dateFormat(x.date_event, 'yyyy-mm-dd'),
          description: x.description_event,
        });
        this.calendarOptions.events=this.allEventsCalendar;
      });
      console.log(this.allEventsCalendar);
    });
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }
  infoEvent(event){

    console.log(event);
    console.log(event.event._def.title);

  }
}
