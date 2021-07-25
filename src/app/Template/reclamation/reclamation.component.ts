import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AssociationService } from 'src/app/Services/association.service';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css'],
})
export class ReclamationComponent implements OnInit {
  note = 0;
  showForm = false;
  feedbackList: any[];
associations: any[];
  constructor(private fbServ: FeedbackService, private globalServ: GlobalService, private assoServ: AssociationService) {}

  ngOnInit(): void {
   this.AllFeedbacks();
   this.AllAssociations();
  }
  AllFeedbacks(){
    this.fbServ.getFeedBack().subscribe((data) => {
      this.feedbackList = data;
      this.feedbackList.map((x)=>{
        x.userId=this.globalServ.getItem(x.userId).subscribe((data)=>{x.userId=data; });
        x.association=this.globalServ.getItem(x.association).subscribe((data)=>{x.association=data; });
      });
      console.log(this.feedbackList);

    });

  }
  AllAssociations(){
    this.assoServ.findAll()
    .subscribe((res: any) => {

      this.associations = res;
      console.log( this.associations);
    }, err => {
      console.log(err);
    });
  }

  vote(nbr): void {
    $('.star').on('click', function () {
      $('.selected').each(function () {
        $(this).removeClass('selected');
      });
      $(this).addClass('selected');
    });
    this.note = 5 - nbr + 1;
    console.log(this.note);
  }
}
